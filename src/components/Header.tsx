import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';
import Button from './Button';

const navigation = [
  { name: 'Programs', href: '#programs' },
  { name: 'Campus Life', href: '#campus-life' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'Scholarships', href: '#scholarships' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDropdown = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20 px-2 sm:px-0">
          <div className="flex-shrink-0">
            <button
              onClick={scrollToTop}
              className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-primary hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg px-1 sm:px-2 py-1 cursor-pointer"
              aria-label="Go to top of page"
            >
              Your University
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-secondary hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Button href="#apply">Apply Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary hover:text-primary p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={18} className="sm:w-5 sm:h-5" /> : <Menu size={18} className="sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg max-h-screen overflow-y-auto"
            >
              <div className="py-4 sm:py-6 px-3 sm:px-4 space-y-1 sm:space-y-2">
                {navigation.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between w-full text-left py-2.5 sm:py-3 px-3 sm:px-4 text-secondary hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium text-sm sm:text-base"
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={14} className="sm:w-4 sm:h-4 text-accent" />
                  </motion.button>
                ))}
                <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-gray-200">
                  <Button href="#apply" className="w-full justify-center text-sm sm:text-base py-2.5 sm:py-3">Apply Now</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}