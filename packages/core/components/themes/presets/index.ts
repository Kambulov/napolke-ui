import {palette} from "./pallete";

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
   market: PaleteItem
   link: PaleteItem
   background: PaleteItem
   border: PaleteItem
   success: PaleteItem
   successLight: PaleteItem
   primaryLight: PaleteItem
   primary: PaleteItem
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