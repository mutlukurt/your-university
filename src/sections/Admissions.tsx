import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import Timeline from '../components/Timeline';
import Button from '../components/Button';

export default function Admissions() {
  return (
    <section id="admissions" className="py-12 md:py-16 lg:py-24 bg-bg">
      <Container animate>
        <SectionHeading
          title="Join Our Community"
          subtitle="Start your journey with a simple application process designed to help us understand your unique potential."
        />
        
        <Timeline />
        
        <div className="mt-8 md:mt-12 lg:mt-16 p-4 md:p-6 lg:p-8 bg-white rounded-2xl border-l-4 border-accent shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-4 md:mb-6 lg:mb-0">
              <h3 className="text-xl md:text-2xl font-bold text-text mb-2">Merit-Based Scholarships Available</h3>
              <p className="text-sm md:text-base text-muted">
                We offer over $5 million in scholarships annually to deserving students. 
                Financial aid counselors are available to help you explore all options.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:flex-shrink-0 lg:ml-8">
              <Button href="#scholarships" variant="secondary">
                View Scholarships
              </Button>
              <Button href="#estimate-tuition">
                Estimate Tuition
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}