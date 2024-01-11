
interface PaleteItem {
   value: string,
   name: string,
}

export interface NapolkeUIThemesExpressiveness {
   linkStyle: string
   linkHoverStyle: string
   dropdownBoxShadow: string
   scrollerStart: string
   scrollerEnd: string
   shadowSmall: string
   shadowMedium: string
   shadowLarge: string
   portalOpacity: number
}
export interface NapolkeIThemesLayout {
   radius: PaleteItem
   gapQuarter: PaleteItem
   gapHalf: PaleteItem
   gap: PaleteItem
   unit: PaleteItem
   gapQuarterNegative: PaleteItem
   pageWidthWithMargin: PaleteItem
   breakpointMobile: PaleteItem
   breakpointTablet: PaleteItem
   pageMargin: PaleteItem
}
export interface NapolkeIThemesPalette {
   white: PaleteItem
   link: PaleteItem
   background: PaleteItem
   border: PaleteItem
   success: PaleteItem
   successLight: PaleteItem
   secondary: PaleteItem
   error: PaleteItem
   errorLight: PaleteItem
   warning: PaleteItem
   black: PaleteItem
   gray50: PaleteItem
   gray200: PaleteItem
   gray300: PaleteItem
   gray400: PaleteItem
   gray500: PaleteItem
   gray700: PaleteItem
   gray950: PaleteItem
   primary50: PaleteItem
   primary100: PaleteItem
   primary200: PaleteItem
   primary300: PaleteItem
   primary400: PaleteItem
   primary500: PaleteItem
   primary600: PaleteItem
   primary700: PaleteItem
   primary800: PaleteItem
   primary900: PaleteItem
   primary950: PaleteItem
}

export interface BreakpointsItem {
   min: string
   max: string
}

export interface NapolkeUIThemesBreakpoints {
   xs: BreakpointsItem
   sm: BreakpointsItem
   md: BreakpointsItem
   lg: BreakpointsItem
   xl: BreakpointsItem
}
export interface NapolkeUIThemesFont {
   sans: string
   mono: string
   prism: string
}
export interface NapolkeUIThemes {
   layout: NapolkeIThemesLayout
   palette: NapolkeIThemesPalette
   expressiveness: NapolkeUIThemesExpressiveness
   font: NapolkeUIThemesFont,
   breakpoints: NapolkeUIThemesBreakpoints
}

const palette:NapolkeIThemesPalette = {
   white: {
      value: '#fff',
      name: 'var(--nui-color-white)'
   },
   link: {
      value: '#0070f3',
      name: 'var(--nui-color-link)'
   },
   background: {
      value: '#fff',
      name: 'var(--nui-color-background)'
   },
   border: {
      value: '#eaeaea',
      name: 'var(--nui-color-border-default)'
   },
   success: {
      value: '#0070f3',
      name: 'var(--nui-color-success)'
   },
   successLight: {
      value: '#3291ff',
      name: 'var(--nui-color-success-light)'
   },
   secondary: {
      value: '#666',
      name: 'var(--nui-color-secondary)'
   },
   error: {
      value: '#e00',
      name: 'var(--nui-color-secondary)'
   },
   errorLight: {
      value: '#ff1a1a',
      name: 'var(--nui-color-error-light)'
   },
   warning: {
      value: '#f5a623',
      name: 'var(--nui-color-secondary)'
   },
   black: {
      value: '#000',
      name: 'var(--nui-color-black)'
   },
   gray50: {
      value: 'hsl(0 0% 98%)',
      name: 'var(--npui-color-gray-50)'
   },
   gray200: {
      value: 'hsl(240 5.9% 90%)',
      name: 'var(--npui-color-gray-200)'
   },
   gray300: {
      value: 'hsl(240 4.9% 83.9%)',
      name: 'var(--npui-color-gray-300)'
   },
   gray400: {
      value: 'hsl(240 5% 64.9%)',
      name: 'var(--npui-color-gray-400)'
   },
   gray500: {
      value: 'hsl(240 3.8% 46.1%)',
      name: 'var(--npui-color-gray-500)'
   },
   gray700: {
      value: 'hsl(240 5.3% 26.1%)',
      name: 'var(--npui-color-gray-700)'
   },
   gray950: {
      value: 'hsl(240 7.3% 8%)',
      name: 'var(--npui-color-gray-950)'
   },

   primary50: {
      value: 'hsl(204 100% 97.1%)',
      name: 'var(--nui-color-primary-50)'
   },
   primary100: {
      value: 'hsl(204 93.8% 93.7%)',
      name: 'var(--nui-color-primary-100)'
   },
   primary200: {
      value: 'hsl(200.6 94.4% 86.1%)',
      name: 'var(--nui-color-primary-200)'
   },
   primary300: {
      value: 'hsl(199.4 95.5% 73.9%)',
      name: 'var(--nui-color-primary-300)'
   },
   primary400: {
      value: 'hsl(198.4 93.2% 59.6%)',
      name: 'var(--nui-color-primary-400)'
   },
   primary500: {
      value: 'hsl(198.6 88.7% 48.4%)',
      name: 'var(--nui-color-primary-500)'
   },
   primary600: {
      value: 'hsl(200.4 98% 39.4%)',
      name: 'var(--nui-color-primary-600)'
   },
   primary700: {
      value: 'hsl(201.3 96.3% 32.2%)',
      name: 'var(--nui-color-primary-700)'
   },
   primary800: {
      value: 'hsl(201.3 96.3% 32.2%)',
      name: 'var(--nui-color-primary-800)'
   },
   primary900: {
      value: 'hsl(202 80.3% 23.9%)',
      name: 'var(--nui-color-primary-900)'
   },
   primary950: {
      value: 'hsl(202.3 73.8% 16.5%)',
      name: 'var(--nui-color-primary-950)'
   },
}


export const Theme: NapolkeUIThemes = {
   palette,
   layout: {
      radius: {
         value: '6px',
         name: 'var(--nui-radius-default)'
      },
      gapQuarter: {
         value: '4pt',
         name: 'var(--nui-gap-quarter)'
      },
      gapHalf: {
         value: '8pt',
         name: 'var(--nui-gap-half)'
      },
      gap: {
         value: '16pt',
         name: 'var(--nui-gap)'
      },
      unit: {
         value: '16px',
         name: 'var(--nui-unit)'
      },
      gapQuarterNegative: {
         value: '-4pt',
         name: 'var(--nui-gap-quarter-negative)'
      },
      pageWidthWithMargin: {
         value: '782pt',
         name: 'var(--nui-page-with-margin)'
      },
      breakpointMobile: {
         value: '650px',
         name: 'var(--nui-breakpoint-mobile)'
      },
      breakpointTablet: {
         value: '900px',
         name: 'var(--nui-breakpoint-tablet)'
      },
      pageMargin: {
         value: '16pt',
         name: 'var(--nui-page-margin)'
      },

   },
   expressiveness: {
      linkStyle: 'none',
      linkHoverStyle: 'none',
      dropdownBoxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.02)',
      scrollerStart: 'rgba(255, 255, 255, 1)',
      scrollerEnd: 'rgba(255, 255, 255, 0)',
      shadowSmall: '0 5px 10px rgba(0, 0, 0, 0.12)',
      shadowMedium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      shadowLarge: '0 30px 60px rgba(0, 0, 0, 0.12)',
      portalOpacity: 0.25,
   },
   font: {
      sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      mono: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
      prism:
         'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,"Liberation Mono", "Courier New", monospace',
   },
   breakpoints: {
      xs: {
         min: '0',
         max: '650px',
      },
      sm: {
         min: '650px',
         max: '900px',
      },
      md: {
         min: '900px',
         max: '1280px',
      },
      lg: {
         min: '1280px',
         max: '1920px',
      },
      xl: {
         min: '1920px',
         max: '10000px',
      },
   }
}