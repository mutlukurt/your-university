import { Award, DollarSign, Users, GraduationCap, CheckCircle, Calendar } from 'lucide-react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import ScholarshipCard from '../components/ScholarshipCard';
import Button from '../components/Button';

const scholarships = [
  {
    title: 'Merit Excellence Scholarship',
    amount: 'Up to $25,000',
    description: 'Awarded to outstanding students with exceptional academic achievements and leadership potential.',
    requirements: [
      'GPA 3.8 or higher',
      'SAT 1400+ or ACT 32+',
      'Leadership experience',
      'Community service'
    ],
    deadline: 'March 1st',
    renewable: true,
    icon: <Award size={24} />
  },
  {
    title: 'International Student Scholarship',
    amount: 'Up to $15,000',
    description: 'Supporting talented international students to pursue their educational dreams at our university.',
    requirements: [
      'International student status',
      'GPA 3.5 or higher',
      'English proficiency',
      'Financial need demonstration'
    ],
    deadline: 'January 15th',
    renewable: true,
    icon: <Users size={24} />
  },
  {
    title: 'STEM Innovation Grant',
    amount: 'Up to $20,000',
    description: 'Encouraging the next generation of scientists, engineers, and technology innovators.',
    requirements: [
      'STEM major enrollment',
      'Research project proposal',
      'Faculty recommendation',
      'GPA 3.6 or higher'
    ],
    deadline: 'February 15th',
    renewable: false,
    icon: <GraduationCap size={24} />
  },
  {
    title: 'Need-Based Financial Aid',
    amount: 'Varies',
    description: 'Comprehensive financial assistance program to make education accessible for all qualified students.',
    requirements: [
      'FAFSA completion',
      'Demonstrated financial need',
      'Satisfactory academic progress',
      'Enrollment verification'
    ],
    deadline: 'April 1st',
    renewable: true,
    icon: <DollarSign size={24} />
  }
];

const scholarshipStats = [
  { value: '$5M+', label: 'Awarded Annually' },
  { value: '85%', label: 'Students Receive Aid' },
  { value: '40+', label: 'Scholarship Programs' },
  { value: '$12K', label: 'Average Award' }
];

export default function Scholarships() {
  return (
    <section id="scholarships" className="py-12 md:py-16 lg:py-24 bg-white">
      <Container animate>
        <SectionHeading
          title="Scholarships & Financial Aid"
          subtitle="We believe exceptional education should be accessible. Explore our comprehensive scholarship programs designed to support your academic journey."
        />

        {/* Scholarship Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {scholarshipStats.map((stat, index) => (
            <div key={index} className="text-center p-4 md:p-6 bg-bg rounded-xl">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scholarship Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {scholarships.map((scholarship, index) => (
            <ScholarshipCard
              key={index}
              {...scholarship}
              index={index}
            />
          ))}
        </div>

        {/* Application Process */}
        <div className="bg-bg rounded-2xl p-6 md:p-8 lg:p-10">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-text mb-3 md:mb-4">
              How to Apply for Scholarships
            </h3>
            <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
              Follow these simple steps to apply for scholarships and maximize your financial aid opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10">
            <div className="text-center">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-lg md:text-xl font-bold">1</span>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-text mb-2">Complete Application</h4>
              <p className="text-sm md:text-base text-muted">Submit your university application and required documents.</p>
            </div>
            <div className="text-center">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-lg md:text-xl font-bold">2</span>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-text mb-2">Submit FAFSA</h4>
              <p className="text-sm md:text-base text-muted">Complete the Free Application for Federal Student Aid.</p>
            </div>
            <div className="text-center">
              <div className="w-12 md:w-16 h-12 md:h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <span className="text-lg md:text-xl font-bold">3</span>
              </div>
              <h4 className="text-base md:text-lg font-semibold text-text mb-2">Receive Award</h4>
              <p className="text-sm md:text-base text-muted">Get notified of your scholarship awards and next steps.</p>
            </div>
          </div>

          <div className="text-center">
            <Button href="#apply-scholarships" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
              Apply for Scholarships
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}