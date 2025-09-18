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
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          <div className="flex-shrink-0">
            <button
              onClick={scrollToTop}
              className="text-xl md:text-2xl font-serif font-bold text-primary hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg px-2 py-1 cursor-pointer"
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
              className="text-secondary hover:text-primary p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
              className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t shadow-lg"
            >
              <div className="py-6 px-4 space-y-2">
                {navigation.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between w-full text-left py-3 px-4 text-secondary hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} className="text-accent" />
                  </motion.button>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <Button href="#apply" className="w-full justify-center">Apply Now</Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}