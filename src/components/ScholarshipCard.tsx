import { motion } from 'framer-motion';
import { Calendar, RefreshCw, CheckCircle } from 'lucide-react';
import { ReactNode } from 'react';

interface ScholarshipCardProps {
  title: string;
  amount: string;
  description: string;
  requirements: string[];
  deadline: string;
  renewable: boolean;
  icon: ReactNode;
  index: number;
}

export default function ScholarshipCard({
  title,
  amount,
  description,
  requirements,
  deadline,
  renewable,
  icon,
  index
}: ScholarshipCardProps) {
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
      className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <div className="flex items-start justify-between mb-4 md:mb-6">
        <div className="flex items-center">
          <div className="p-3 bg-accent/10 text-accent rounded-xl mr-4">
            {icon}
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-text mb-1">{title}</h3>
            <div className="text-2xl md:text-3xl font-bold text-primary">{amount}</div>
          </div>
        </div>
        {renewable && (
          <div className="flex items-center text-xs md:text-sm text-accent bg-accent/10 px-2 md:px-3 py-1 rounded-full">
            <RefreshCw size={12} className="mr-1" />
            Renewable
          </div>
        )}
      </div>

      <p className="text-sm md:text-base text-muted mb-4 md:mb-6 leading-relaxed">
        {description}
      </p>

      <div className="mb-4 md:mb-6">
        <h4 className="text-sm md:text-base font-semibold text-text mb-2 md:mb-3">Requirements:</h4>
        <ul className="space-y-1 md:space-y-2">
          {requirements.map((requirement, idx) => (
            <li key={idx} className="flex items-start text-xs md:text-sm text-muted">
              <CheckCircle size={14} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
              {requirement}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center text-xs md:text-sm text-muted">
          <Calendar size={14} className="mr-1 md:mr-2" />
          Deadline: {deadline}
        </div>
        <button className="text-xs md:text-sm text-primary hover:text-accent transition-colors font-medium">
          Learn More →
        </button>
      </div>
    </motion.div>
  );
}