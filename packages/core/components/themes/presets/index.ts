
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
export interface NapolkeUIThemesPalette {
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
   gray100: PaleteItem
   gray200: PaleteItem
   gray300: PaleteItem
   gray400: PaleteItem
   gray500: PaleteItem
   gray600: PaleteItem
   gray700: PaleteItem
   gray800: PaleteItem
   gray900: PaleteItem
   gray950: PaleteItem
   blue50: PaleteItem
   blue100: PaleteItem
   blue200: PaleteItem
   blue300: PaleteItem
   blue400: PaleteItem
   blue500: PaleteItem
   blue600: PaleteItem
   blue700: PaleteItem
   blue800: PaleteItem
   blue900: PaleteItem
   blue950: PaleteItem

   green50: PaleteItem
   green100: PaleteItem
   green200: PaleteItem
   green300: PaleteItem
   green400: PaleteItem
   green500: PaleteItem
   green600: PaleteItem
   green700: PaleteItem
   green800: PaleteItem
   green900: PaleteItem
   green950: PaleteItem
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
   palette: NapolkeUIThemesPalette
   expressiveness: NapolkeUIThemesExpressiveness
   font: NapolkeUIThemesFont,
   breakpoints: NapolkeUIThemesBreakpoints
}

const palette:NapolkeUIThemesPalette = {
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
   // *** GRAY ***
   gray50: {
      value: 'hsl(0 0% 98%)',
      name: 'var(--npui-color-gray-50)'
   },
   gray100: {
      value: 'hsl(240 4.8% 95.9%)',
      name: 'var(--npui-color-gray-100)'
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
   gray600: {
      value: 'hsl(240 5.2% 33.9%)',
      name: 'var(--npui-color-gray-500)'
   },
   gray700: {
      value: 'hsl(240 5.3% 26.1%)',
      name: 'var(--npui-color-gray-700)'
   },
   gray800: {
      value: 'hsl(240 3.7% 15.9%)',
      name: 'var(--npui-color-gray-700)'
   },
   gray900: {
      value: 'hsl(240 5.9% 10%)',
      name: 'var(--npui-color-gray-700)'
   },
   gray950: {
      value: 'hsl(240 7.3% 8%)',
      name: 'var(--npui-color-gray-950)'
   },
   // *** GRAY ***
   blue50: {
      value: 'hsl(204 100% 97.1%)',
      name: 'var(--nui-color-blue-50)'
   },
   blue100: {
      value: 'hsl(204 93.8% 93.7%)',
      name: 'var(--nui-color-blue-100)'
   },
   blue200: {
      value: 'hsl(200.6 94.4% 86.1%)',
      name: 'var(--nui-color-blue-200)'
   },
   blue300: {
      value: 'hsl(199.4 95.5% 73.9%)',
      name: 'var(--nui-color-blue-300)'
   },
   blue400: {
      value: 'hsl(198.4 93.2% 59.6%)',
      name: 'var(--nui-color-blue-400)'
   },
   blue500: {
      value: 'hsl(198.6 88.7% 48.4%)',
      name: 'var(--nui-color-blue-500)'
   },
   blue600: {
      value: 'hsl(200.4 98% 39.4%)',
      name: 'var(--nui-color-blue-600)'
   },
   blue700: {
      value: 'hsl(201.3 96.3% 32.2%)',
      name: 'var(--nui-color-blue-700)'
   },
   blue800: {
      value: 'hsl(201.3 96.3% 32.2%)',
      name: 'var(--nui-color-blue-800)'
   },
   blue900: {
      value: 'hsl(202 80.3% 23.9%)',
      name: 'var(--nui-color-blue-900)'
   },
   blue950: {
      value: 'hsl(202.3 73.8% 16.5%)',
      name: 'var(--nui-color-blue-950)'
   },

   // *** GREEn ***
   green50: {
      value: 'hsl(138.5 76.5% 96.7%)',
      name: 'var(--nui-color-green-50)'
   },
   green100: {
      value: 'hsl(140.6 84.2% 92.5%)',
      name: 'var(--nui-color-green-100)'
   },
   green200: {
      value: 'hsl(141 78.9% 85.1%)',
      name: 'var(--nui-color-green-200)'
   },
   green300: {
      value: 'hsl(141.7 76.6% 73.1%)',
      name: 'var(--nui-color-green-300)'
   },
   green400: {
      value: 'hsl(141.9 69.2% 58%)',
      name: 'var(--nui-color-green-400)'
   },
   green500: {
      value: 'hsl(142.1 70.6% 45.3%)',
      name: 'var(--nui-color-green-500)'
   },
   green600: {
      value: 'hsl(142.1 76.2% 36.3%)',
      name: 'var(--nui-color-green-600)'
   },
   green700: {
      value: 'hsl(142.4 71.8% 29.2%)',
      name: 'var(--nui-color-green-700)'
   },
   green800: {
      value: 'hsl(142.8 64.2% 24.1%)',
      name: 'var(--nui-color-green-800)'
   },
   green900: {
      value: 'hsl(143.8 61.2% 20.2%)',
      name: 'var(--nui-color-green-900)'
   },
   green950: {
      value: 'hsl(144.3 60.7% 12%)',
      name: 'var(--nui-color-green-950)'
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
         value: '825pt',
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