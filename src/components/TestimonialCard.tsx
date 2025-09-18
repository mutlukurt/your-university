import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  program: string;
  avatar: string;
  photographer: string;
  photographerUrl: string;
  index: number;
}

export default function TestimonialCard({ 
  quote, 
  name, 
  program, 
  avatar, 
  photographer, 
  photographerUrl, 
  index 
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="text-accent mb-3 md:mb-4">
        <Quote size={24} />
      </div>
      <blockquote className="text-base md:text-lg text-muted leading-relaxed mb-4 md:mb-6">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        <div className="relative">
          <img
            src={avatar}
            alt={`Portrait of ${name}`}
            className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute -bottom-1 -right-1 text-xs text-gray-400 bg-white/80 rounded px-1 hidden">
            <a
              href={photographerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
              title={`Photo by ${photographer}`}
            >
              📸
            </a>
          </div>
        </div>
        <div className="ml-3 md:ml-4">
          <div className="text-sm md:text-base font-semibold text-text">{name}</div>
          <div className="text-xs md:text-sm text-accent">{program}</div>
        </div>
      </div>
    </motion.div>
  );
}