
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
}
export interface NapolkeIThemesPalette {
   white: PaleteItem
   background: PaleteItem
   border: PaleteItem
   success: PaleteItem
   secondary: PaleteItem
   error: PaleteItem
   warning: PaleteItem
   black: PaleteItem
   gray50: PaleteItem
   gray200: PaleteItem
   gray300: PaleteItem
   gray400: PaleteItem
   gray500: PaleteItem
   gray700: PaleteItem
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
   secondary: {
      value: '#666',
      name: 'var(--nui-color-secondary)'
   },
   error: {
      value: '#e00',
      name: 'var(--nui-color-secondary)'
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