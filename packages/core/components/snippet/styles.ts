import { SnippetTypes } from '../utils/prop-types'
import { NapolkeUIThemesPalette } from '../themes/presets'

export type SnippetStyles = {
  color: string
  border: string
  bgColor: string
}

export const getStyles = (
  type: SnippetTypes,
  palette: NapolkeUIThemesPalette,
  fill?: boolean,
) => {
  const styles: { [key in SnippetTypes]: SnippetStyles } = {
    default: {
      color: palette.black.name,
      border: palette.border.name,
      bgColor: palette.gray200.name,
    },
    success: {
      color: palette.success.name,
      border: palette.success.name,
      bgColor: palette.background.name,
    },
    warning: {
      color: palette.warning.name,
      border: palette.warning.name,
      bgColor: palette.background.name,
    },
    error: {
      color: palette.error.name,
      border: palette.error.name,
      bgColor: palette.background.name,
    },
    secondary: {
      color: palette.secondary.name,
      border: palette.secondary.name,
      bgColor: palette.background.name,
    },
    lite: {
      color: palette.black.name,
      border: palette.border.name,
      bgColor: palette.gray100.name,
    },
    dark: {
      color: palette.white.name,
      border: palette.background.name,
      bgColor: palette.background.name,
    },
  }

  const filledTypes: Array<SnippetTypes> = ['success', 'warning', 'error', 'secondary']
  const style = styles[type]
  const shouldFilled = filledTypes.includes(type)
  if (!fill || !shouldFilled) return style

  return {
    ...style,
    color: style.bgColor,
    bgColor: style.color,
  }
}
