import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variantClasses: Record<typeof variant, string> = {
    primary: 'bg-emerald-900 text-white hover:bg-emerald-800',
    secondary: 'bg-white text-emerald-900 border border-emerald-900 hover:bg-emerald-50',
    outline: 'border border-emerald-900 text-emerald-900 bg-transparent hover:bg-emerald-50',
  };
  
  const sizeClasses: Record<typeof size, string> = {
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-4 py-2 text-base rounded-xl',
    lg: 'px-6 py-3 text-lg rounded-2xl',
  };
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};