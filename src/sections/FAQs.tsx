import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import FAQ from '../components/FAQ';

export default function FAQs() {
  return (
    <section id="faqs" className="py-12 md:py-16 lg:py-24 bg-bg">
      <Container animate>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about admissions, academics, and campus life."
        />
        <div className="max-w-4xl mx-auto">
          <FAQ />
        </div>
      </Container>
    </section>
  );
}