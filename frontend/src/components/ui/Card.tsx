import type { ReactNode } from 'react';
import { cn } from '../../utils/classnames';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = ({
  children,
  className,
  padding = 'md'
}: CardProps) => {
  const paddingClasses: Record<typeof padding, string> = {
    none: '',
    sm: 'p-3',
    md: 'p-4 md:p-5 lg:p-6',
    lg: 'p-6 md:p-8 lg:p-10',
  };
  
  return (
    <div className={cn(
      'bg-white rounded-lg border border-neutral-200 shadow-sm',
      paddingClasses[padding],
      className
    )}>
      {children}
    </div>
  );
};