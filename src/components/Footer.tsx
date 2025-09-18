import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';
import Container from './Container';

const footerLinks = {
  about: [
    { name: 'Our Story', href: '#story' },
    { name: 'Mission & Values', href: '#mission' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Accreditation', href: '#accreditation' },
    { name: 'News & Events', href: '#news' }
  ],
  academics: [
    { name: 'All Programs', href: '#programs' },
    { name: 'Online Learning', href: '#online' },
    { name: 'Research', href: '#research' },
    { name: 'Libraries', href: '#libraries' },
    { name: 'Academic Calendar', href: '#calendar' }
  ],
  admissions: [
    { name: 'Apply Now', href: '#apply' },
    { name: 'Tuition & Aid', href: '#tuition' },
    { name: 'Scholarships', href: '#scholarships' },
    { name: 'Visit Campus', href: '#visit' },
    { name: 'International', href: '#international' }
  ],
  resources: [
    { name: 'Student Portal', href: '#portal' },
    { name: 'Career Services', href: '#careers' },
    { name: 'Alumni Network', href: '#alumni' },
    { name: 'Support Services', href: '#support' },
    { name: 'IT Help Desk', href: '#it-help' }
  ]
};

const socialLinks = [
  { name: 'Facebook', href: '#facebook', icon: Facebook },
  { name: 'Twitter', href: '#twitter', icon: Twitter },
  { name: 'Instagram', href: '#instagram', icon: Instagram },
  { name: 'LinkedIn', href: '#linkedin', icon: Linkedin }
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <Container>
        <div className="py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
            {/* University Info */}
            <div className="md:col-span-2 lg:col-span-2">
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 md:mb-4">Your University</h3>
              <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6 leading-relaxed">
                Empowering students worldwide with exceptional education, 
                innovative research, and a vibrant campus community since 1965.
              </p>
              <div className="space-y-1 md:space-y-2">
                <div className="flex items-center">
                  <MapPin size={14} className="mr-2 md:mr-3 text-accent flex-shrink-0" />
                  <span className="text-xs md:text-sm text-white/80">123 University Ave, Education City</span>
                </div>
                <div className="flex items-center">
                  <Phone size={14} className="mr-2 md:mr-3 text-accent flex-shrink-0" />
                  <span className="text-xs md:text-sm text-white/80">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail size={14} className="mr-2 md:mr-3 text-accent flex-shrink-0" />
                  <span className="text-xs md:text-sm text-white/80">info@youruniversity.edu</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="hidden md:block">
              <h4 className="text-sm md:text-base font-semibold mb-3 md:mb-4">About</h4>
              <ul className="space-y-1 md:space-y-2">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-xs md:text-sm text-white/80 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden md:block">
              <h4 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Academics</h4>
              <ul className="space-y-1 md:space-y-2">
                {footerLinks.academics.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-xs md:text-sm text-white/80 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:block">
              <h4 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Admissions</h4>
              <ul className="space-y-1 md:space-y-2">
                {footerLinks.admissions.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-xs md:text-sm text-white/80 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:block">
              <h4 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Resources</h4>
              <ul className="space-y-1 md:space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-xs md:text-sm text-white/80 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-4 md:space-x-6 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-white/60 hover:text-accent transition-colors"
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 md:py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-white/60 space-y-2 md:space-y-0">
            <p>&copy; {new Date().getFullYear()} Mutlu Kurt. Licensed under MIT License.</p>
            <div className="flex space-x-4 md:space-x-6">
              <a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-accent transition-colors">Terms of Use</a>
              <a href="#accessibility" className="hover:text-accent transition-colors hidden sm:inline">Accessibility</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}