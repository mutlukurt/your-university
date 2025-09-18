import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Programs from './sections/Programs';
import CampusLife from './sections/CampusLife';
import Admissions from './sections/Admissions';
import Scholarships from './sections/Scholarships';
import Testimonials from './sections/Testimonials';
import FAQs from './sections/FAQs';
import Contact from './sections/Contact';
import CTA from './sections/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set page title
    document.title = 'Your University - Shape Your Future';
    
    // Handle reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      document.documentElement.style.setProperty('--motion-duration', '0s');
    }
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Programs />
        <CampusLife />
        <Admissions />
        <Scholarships />
        <Testimonials />
        <FAQs />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;