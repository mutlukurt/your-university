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
      className={`max-w-container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 ${className}`}
      {...animationProps}
    >
      {children}
    </Wrapper>
  );
}