export enum BreakpointsName  {
  mobile = 'mobile',
  sm = 'sm',
  tablet = 'tablet',
  ipad = 'ipad',
  desktop = 'desktop',
  lgDesktop = 'lgDesktop'
}

type Breakpoints<T extends string | symbol | number, U> = {
  [K in T]: U;
};

export const breakpoints : Breakpoints<BreakpointsName | string, number> = {
  mobile : 320,
  sm : 400,
  tablet: 768,
  ipad: 992,
  desktop: 1200,
  lgDesktop: 1900
};

export const from = ( breakpoint: BreakpointsName ) => `@media(min-width: ${breakpoints[breakpoint]}px)`;

