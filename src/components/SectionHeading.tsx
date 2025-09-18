import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, children, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-8 md:mb-12 lg:mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text mb-3 md:mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted max-w-3xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}