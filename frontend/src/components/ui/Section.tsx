import type { ReactNode } from 'react';
import { cn } from '../../utils/classnames';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  background?: 'white' | 'gray' | 'emerald';
  id?: string;
}

export const Section = ({
  children,
  className,
  containerSize = 'xl',
  padding = 'md',
  background = 'white',
  id
}: SectionProps) => {
  const paddingClasses: Record<typeof padding, string> = {
    none: '',
    sm: 'py-8',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-20 lg:py-24',
  };
  
  const backgroundClasses: Record<typeof background, string> = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    emerald: 'bg-emerald-900',
  };
  
  return (
    <section
      id={id}
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};