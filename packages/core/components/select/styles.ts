import { NormalTypes } from '../utils/prop-types'
import {NapolkeUIThemesPalette, Theme} from '../themes/presets'

export type SelectColor = {
  border: string
  borderActive: string
  iconBorder: string
  placeholderColor: string
}

export const getColors = (
  palette: NapolkeUIThemesPalette,
  status?: NormalTypes,
): SelectColor => {
  const colors: { [key in NormalTypes]: SelectColor } = {
    default: {
      border: Theme.palette.border.name,
      borderActive: Theme.palette.background.name,
      iconBorder: Theme.palette.gray500.name,
      placeholderColor: palette.gray300.name,
    },
    secondary: {
      border: palette.border.name,
      borderActive: palette.background.name,
      iconBorder: palette.gray500.name,
      placeholderColor: palette.gray300.name,
    },
    success: {
      border: palette.successLight.name,
      borderActive: palette.success.name,
      iconBorder: palette.success.name,
      placeholderColor: palette.gray300.name,
    },
    warning: {
      border: palette.warning.name,
      borderActive: palette.warning.name,
      iconBorder: palette.warning.name,
      placeholderColor: palette.gray300.name,
    },
    error: {
      border: palette.errorLight.name,
      borderActive: palette.error.name,
      iconBorder: palette.error.name,
      placeholderColor: palette.error.name,
    },
  }

  if (!status) return colors.default
  return colors[status]
}
