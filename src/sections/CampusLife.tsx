import { Users, FlaskRound as Flask, Trophy, Home } from 'lucide-react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import ImageMosaic from '../components/ImageMosaic';

const highlights = [
  {
    icon: <Users size={24} />,
    title: '200+ Student Organizations',
    description: 'Join clubs, societies, and professional organizations that match your interests.'
  },
  {
    icon: <Flask size={24} />,
    title: 'State-of-the-Art Labs',
    description: 'Access cutting-edge research facilities and modern learning environments.'
  },
  {
    icon: <Trophy size={24} />,
    title: 'Championship Athletics',
    description: 'Compete at the highest level with our nationally ranked sports programs.'
  },
  {
    icon: <Home size={24} />,
    title: 'On-Campus Housing',
    description: 'Live in modern residence halls with dining options and study spaces.'
  }
];

export default function CampusLife() {
  return (
    <section id="campus-life" className="py-12 md:py-16 lg:py-24 bg-white">
      <Container animate>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading
              title="Vibrant Campus Life"
              subtitle="Experience a rich campus community where learning extends far beyond the classroom."
              centered={false}
            />
            
            <div className="space-y-4 md:space-y-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-accent/10 text-accent mt-1">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-text mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <ImageMosaic />
          </div>
        </div>
      </Container>
    </section>
  );
}