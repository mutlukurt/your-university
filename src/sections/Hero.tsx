import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';

export default function Hero() {
  // Using copyright-free image from Unsplash
  const heroImage = {
    src: {
      large: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80'
    },
    alt: 'University students studying together in modern campus environment'
  };

  return (
    <section className="relative pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 bg-bg overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-text leading-tight mb-3 sm:mb-4 md:mb-6">
              Shape Your Future with a{' '}
              <span className="text-accent">World-Class</span>{' '}
              Education
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed mb-4 sm:mb-6 md:mb-8 max-w-lg">
              Explore industry-aligned programs, vibrant campus life, and a global 
              community of learners ready to make their mark on the world.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 md:gap-4">
              <Button href="#programs" className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 justify-center xs:justify-start">
                Explore Programs
              </Button>
              <Button 
                variant="secondary" 
                href="#contact"
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 justify-center xs:justify-start"
              >
                Request Info
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage.src.large}
                alt={heroImage.alt}
                className="w-full h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}