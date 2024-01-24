import { NapolkeUIThemesPalette } from '../themes/presets'

export type BrowserColors = {
  color: string
  barBgColor: string
  inputBgColor: string
  borderColor: string
  titleColor: string
}

export const getBrowserColors = (
  invert: boolean,
  palette: NapolkeUIThemesPalette,
): BrowserColors => {
  return invert
    ? {
        color: palette.background.name,
        barBgColor: palette.background.name,
        inputBgColor: palette.gray950.name,
        borderColor: palette.gray700.name,
        titleColor: palette.gray200.name,
      }
    : {
        color: palette.background.name,
        barBgColor: palette.background.name,
        inputBgColor: palette.gray50.name,
        borderColor: palette.border.name,
        titleColor: palette.gray500.name,
      }
}
