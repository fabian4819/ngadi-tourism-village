import { useState, useEffect } from 'react';

export const breakpoints = {
  mobile: 384,
  tablet: 1024,
  desktop: 1280,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('mobile'); // Specify type

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= breakpoints.desktop) {
        setBreakpoint('desktop');
      } else if (width >= breakpoints.tablet) {
        setBreakpoint('tablet');
      } else {
        setBreakpoint('mobile');
      }
    };

    // Set initial breakpoint
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

export const getResponsiveValue = <T>(
  values: Partial<Record<Breakpoint, T>>,
  currentBreakpoint: Breakpoint
): T | undefined => {
  // Prioritize desktop, then tablet, then mobile
  if (currentBreakpoint === 'desktop' && values.desktop !== undefined) {
    return values.desktop;
  }
  if (currentBreakpoint === 'tablet' && values.tablet !== undefined) {
    return values.tablet;
  }
  return values.mobile; // Default to mobile if no specific breakpoint value is found
};