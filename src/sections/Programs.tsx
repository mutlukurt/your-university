import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import ProgramTabs from '../components/ProgramTabs';
import Button from '../components/Button';

export default function Programs() {
  return (
    <section id="programs" className="py-12 md:py-16 lg:py-24 bg-bg">
      <Container animate>
        <SectionHeading
          title="Academic Excellence"
          subtitle="Choose from our comprehensive range of programs designed to prepare you for tomorrow's challenges and opportunities."
        />
        <ProgramTabs />
        <div className="text-center mt-8 md:mt-12">
          <Button href="#all-programs" variant="secondary" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
            See All Programs
          </Button>
        </div>
      </Container>
    </section>
  );
}