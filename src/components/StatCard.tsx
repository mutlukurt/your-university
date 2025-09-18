import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  index: number;
}

export default function StatCard({ icon, value, label, index }: StatCardProps) {
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
      className="text-center p-6 md:p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="text-accent mb-4 flex justify-center">
        {icon}
      </div>
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-text mb-2">
        {value}
      </div>
      <div className="text-sm md:text-base text-muted font-medium">
        {label}
      </div>
    </motion.div>
  );
}