export const breakposints = {
  mobile : 320,
  sm : 400,
  tablet: 768,
  ipad: 992,
  desktop: 1200,
  lgDesktop: 1900
}


export const brakepointsNames = ['mobile','tablet' , 'ipad' , 'desktop' , 'lgDesktop'];
export const from = ( breakpoint ) =>( `@media(min-width: ${breakposints[breakpoint]}px)`);

