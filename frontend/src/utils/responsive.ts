export const breakpoints = {
  mobile: 384,
  tablet: 1024,
  desktop: 1280,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const getResponsiveValue = <T>(
  values: Partial<Record<Breakpoint, T>>,
  currentBreakpoint: Breakpoint
): T | undefined => {
  return values[currentBreakpoint] || values.mobile;
};