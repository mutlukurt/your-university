import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const steps = [
  {
    title: 'Apply Online',
    description: 'Complete your application with transcripts and personal statement',
    status: 'complete'
  },
  {
    title: 'Submit Documents',
    description: 'Upload required documents and letters of recommendation',
    status: 'current'
  },
  {
    title: 'Receive Decision',
    description: 'Get notified of your acceptance and next steps',
    status: 'upcoming'
  }
];

export default function Timeline() {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="flex flex-col items-center text-center">
              <div className={`
                w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center mb-3 md:mb-4 transition-colors
                ${step.status === 'complete' ? 'bg-primary text-white' : 
                  step.status === 'current' ? 'bg-accent text-white' : 
                  'bg-gray-200 text-gray-400'}
              `}>
                {step.status === 'complete' ? (
                  <Check size={16} />
                ) : (
                  <span className="text-xs md:text-sm font-bold">{index + 1}</span>
                )}
              </div>
              <h3 className="text-base md:text-lg font-semibold text-text mb-1 md:mb-2">{step.title}</h3>
              <p className="text-xs md:text-sm text-muted max-w-xs px-2">{step.description}</p>
            </div>
            
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-5 md:top-6 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2">
                <div className={`
                  h-full transition-all duration-500
                  ${step.status === 'complete' ? 'bg-primary w-full' : 'bg-gray-200 w-0'}
                `} />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}