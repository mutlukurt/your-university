import { useEffect, useState } from 'react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import { fetchImages, type PexelsImage } from '../lib/pexels';

const testimonialData = [
  {
    quote: "The hands-on projects and industry connections opened doors I never thought possible. The professors truly care about student success.",
    name: "Sarah Chen",
    program: "Computer Science '24"
  },
  {
    quote: "From day one, I felt supported by an incredible community. The campus resources and mentorship programs are outstanding.",
    name: "Marcus Johnson",
    program: "Business Administration '23"
  },
  {
    quote: "The research opportunities here are unmatched. I published two papers before graduating and landed my dream job.",
    name: "Elena Rodriguez",
    program: "Data Science '24"
  }
];

export default function Testimonials() {
  const [avatars, setAvatars] = useState<PexelsImage[]>([]);

  useEffect(() => {
    fetchImages({ query: 'portrait student', perPage: 3 }).then(setAvatars);
  }, []);

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white">
      <Container animate>
        <SectionHeading
          title="Student Success Stories"
          subtitle="Hear from our graduates who are making their mark in industries around the world."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              program={testimonial.program}
              avatar={avatars[index]?.src.medium || `https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2`}
              photographer={avatars[index]?.photographer || 'Pexels'}
              photographerUrl={avatars[index]?.photographer_url || 'https://pexels.com'}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}