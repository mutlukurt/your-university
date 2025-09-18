import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export default function Container({ children, className = '', animate = false }: ContainerProps) {
  const Wrapper = animate ? motion.div : 'div';
  
  const animationProps = animate ? {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
    viewport: { once: true, margin: '-50px' }
  } : {};

  return (
    <Wrapper 
      className={`max-w-container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 ${className}`}
      {...animationProps}
    >
      {children}
    </Wrapper>
  );
}