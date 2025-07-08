import { twMerge } from 'tailwind-merge';

export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return twMerge(classes.filter(Boolean).join(' '));
};

export const responsiveClasses = (
  mobile: string,
  tablet?: string,
  desktop?: string
): string => {
  const classes = [mobile];
  
  if (tablet) {
    classes.push(`md:${tablet}`);
  }
  
  if (desktop) {
    classes.push(`lg:${desktop}`);
  }
  
  return cn(...classes);
};