import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  duration: string;
  index: number;
}

export default function ProgramCard({ title, description, duration, index }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        ease: 'easeOut',
        delay: index * 0.1 
      }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="bg-white p-4 md:p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <h3 className="text-lg md:text-xl font-bold text-text mb-2 md:mb-3">{title}</h3>
      <p className="text-sm md:text-base text-muted mb-3 md:mb-4 leading-relaxed">{description}</p>
      <div className="flex items-center justify-between text-xs md:text-sm">
        <div className="flex items-center text-accent">
          <Clock size={14} className="mr-1" />
          {duration}
        </div>
        <button className="flex items-center text-primary hover:text-accent transition-colors">
          <span className="hidden sm:inline">View Curriculum</span>
          <span className="sm:hidden">View</span>
          <ArrowRight size={14} className="ml-1" />
        </button>
      </div>
    </motion.div>
  );
}