import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import Button from '../components/Button';

const contactInfo = [
  {
    icon: <MapPin size={24} />,
    title: 'Visit Our Campus',
    details: [
      '123 University Avenue',
      'Education City, State 12345',
      'United States'
    ],
    action: 'Get Directions'
  },
  {
    icon: <Phone size={24} />,
    title: 'Call Us',
    details: [
      'Main Office: +1 (555) 123-4567',
      'Admissions: +1 (555) 123-4568',
      'International: +1 (555) 123-4569'
    ],
    action: 'Call Now'
  },
  {
    icon: <Mail size={24} />,
    title: 'Email Us',
    details: [
      'info@youruniversity.edu',
      'admissions@youruniversity.edu',
      'international@youruniversity.edu'
    ],
    action: 'Send Email'
  },
  {
    icon: <Clock size={24} />,
    title: 'Office Hours',
    details: [
      'Monday - Friday: 8:00 AM - 6:00 PM',
      'Saturday: 9:00 AM - 4:00 PM',
      'Sunday: Closed'
    ],
    action: 'Schedule Visit'
  }
];

const departments = [
  { name: 'Admissions Office', email: 'admissions@youruniversity.edu', phone: '+1 (555) 123-4568' },
  { name: 'Financial Aid', email: 'finaid@youruniversity.edu', phone: '+1 (555) 123-4570' },
  { name: 'International Services', email: 'international@youruniversity.edu', phone: '+1 (555) 123-4569' },
  { name: 'Student Services', email: 'students@youruniversity.edu', phone: '+1 (555) 123-4571' },
  { name: 'Academic Affairs', email: 'academics@youruniversity.edu', phone: '+1 (555) 123-4572' },
  { name: 'Campus Tours', email: 'tours@youruniversity.edu', phone: '+1 (555) 123-4573' }
];

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-24 bg-bg">
      <Container animate>
        <SectionHeading
          title="Get in Touch"
          subtitle="Have questions about our programs, admissions, or campus life? We're here to help you every step of the way."
        />

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-accent mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-text mb-3 md:mb-4">{info.title}</h3>
              <div className="space-y-1 md:space-y-2 mb-4 md:mb-6">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm md:text-base text-muted">{detail}</p>
                ))}
              </div>
              <button className="text-sm md:text-base text-primary hover:text-accent transition-colors font-medium">
                {info.action} →
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-sm">
            <div className="flex items-center mb-6 md:mb-8">
              <div className="p-3 bg-primary/10 text-primary rounded-xl mr-4">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-text">Send us a Message</h3>
                <p className="text-sm md:text-base text-muted">We'll get back to you within 24 hours</p>
              </div>
            </div>
            <ContactForm />
          </div>

          {/* Department Directory */}
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-text mb-6 md:mb-8">
              Department Directory
            </h3>
            <div className="space-y-4 md:space-y-6">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h4 className="text-base md:text-lg font-semibold text-text mb-2 md:mb-3">{dept.name}</h4>
                  <div className="space-y-1 md:space-y-2">
                    <div className="flex items-center text-sm md:text-base text-muted">
                      <Mail size={14} className="mr-2 text-accent" />
                      <a href={`mailto:${dept.email}`} className="hover:text-primary transition-colors">
                        {dept.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm md:text-base text-muted">
                      <Phone size={14} className="mr-2 text-accent" />
                      <a href={`tel:${dept.phone}`} className="hover:text-primary transition-colors">
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-red-50 border-l-4 border-red-400 rounded-xl">
              <h4 className="text-base md:text-lg font-semibold text-red-800 mb-2">Emergency Contact</h4>
              <p className="text-sm md:text-base text-red-700 mb-2">
                For campus emergencies, call Campus Security 24/7
              </p>
              <div className="flex items-center text-sm md:text-base font-semibold text-red-800">
                <Phone size={14} className="mr-2" />
                <a href="tel:+15551234911" className="hover:underline">+1 (555) 123-4911</a>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Map CTA */}
        <div className="mt-12 md:mt-16 text-center bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-sm">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-text mb-3 md:mb-4">
            Plan Your Visit
          </h3>
          <p className="text-base md:text-lg text-muted mb-6 md:mb-8 max-w-2xl mx-auto">
            Explore our beautiful campus and see why students from around the world choose to call this place home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Button href="#campus-tour" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 justify-center">
              Schedule Campus Tour
            </Button>
            <Button variant="secondary" href="#virtual-tour" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 justify-center">
              Virtual Campus Tour
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}