import Container from '../components/Container';
import Button from '../components/Button';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-primary">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 md:mb-6">
            Ready to Apply?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Take the first step toward your future. Join thousands of students who are 
            already shaping tomorrow through world-class education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
            <Button 
              href="#apply" 
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100 border-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4 justify-center"
            >
              Start Application
            </Button>
            <Button 
              variant="secondary" 
              href="#tour"
              className="border-white text-white hover:bg-white/10 hover:text-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4 justify-center"
            >
              Book a Campus Tour
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}