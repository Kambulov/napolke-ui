import { SnippetTypes } from '../utils/prop-types'
import { NapolkeUIThemesPalette } from '../themes/presets'

export type TooltipColors = {
  bgColor: string
  color: string
}

export const getColors = (
  type: SnippetTypes,
  palette: NapolkeUIThemesPalette,
): TooltipColors => {
  const colors: { [key in SnippetTypes]: string } = {
    default: palette.background.name,
    success: palette.success.name,
    warning: palette.warning.name,
    error: palette.error.name,
    secondary: palette.secondary.name,
    dark: palette.black.name,
    lite: palette.background.name,
  }
  const color =
    type === 'lite' || type === 'default' ? palette.black.name : palette.background.name

  return {
    color,
    bgColor: colors[type],
  }
}
