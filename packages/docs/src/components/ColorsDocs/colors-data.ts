import { NapolkeUIThemesPalette, Theme } from '@core/themes/presets'

export type ColorEnum = {
  [key in keyof NapolkeUIThemesPalette]?: string
}

// export const regexColorsVar = (value: string) => {
//   const regex = /var\(([^)]+)\)/
//   // @ts-ignore
//   const matches: string[] = value.match(regex)
//
//   return matches[1]
// }

export const mainColors: Array<{ name: string; value: string }> = [
  {
    name: 'primary',
    value: Theme.palette.primary.name
  },
  {
    name: 'black',
    value: Theme.palette.black.name
  },
  {
    name: 'white',
    value: Theme.palette.white.name
  },
  {
    name: 'secondary',
    value: Theme.palette.secondary.name
  },
  {
    name: 'success',
    value: Theme.palette.success.name
  },
  {
    name: 'error',
    value: Theme.palette.error.name
  },
  {
    name: 'warning',
    value: Theme.palette.warning.name
  },
  {
    name: 'info',
    value: Theme.palette.info.name
  },
  {
    name: 'background',
    value: Theme.palette.background.name
  }
]

export const colorIndex: number[] = [
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  950
]
