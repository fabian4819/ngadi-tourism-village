import { useState, useEffect } from 'react';
import { breakpoints, Breakpoint } from '../utils/responsive';

export const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('mobile');

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