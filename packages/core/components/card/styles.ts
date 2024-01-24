import { CardTypes } from '../utils/prop-types'
import { NapolkeUIThemesPalette } from '../themes/presets'

export type CardStyles = {
  color: string
  bgColor: string
  borderColor: string
}

export const getStyles = (
  type: CardTypes,
  palette: NapolkeUIThemesPalette,
  isShadow?: boolean,
): CardStyles => {
  const colors: { [key in CardTypes]: Omit<CardStyles, 'borderColor'> } = {
    default: {
      color: palette.black.name,
      bgColor: palette.background.name,
    },
    dark: {
      color: palette.background.name,
      bgColor: palette.black.name,
    },
    secondary: {
      color: palette.background.name,
      bgColor: palette.secondary.name,
    },
    success: {
      color: palette.background.name,
      bgColor: palette.success.name,
    },
    warning: {
      color: palette.background.name,
      bgColor: palette.warning.name,
    },
    error: {
      color: palette.background.name,
      bgColor: palette.error.name,
    },
    lite: {
      color: palette.black.name,
      bgColor: palette.background.name,
    },
    alert: {
      color: 'white',
      bgColor: palette.gray500.name,
    },
    purple: {
      color: 'white',
      bgColor: palette.gray500.name,
    },
    violet: {
      color: 'white',
      bgColor: palette.gray500.name,
    },
    cyan: {
      color: 'black',
      bgColor: palette.gray500.name,
    },
  }
  const showBorder = type === 'default' && !isShadow
  return {
    ...colors[type],
    borderColor: showBorder ? palette.border.name : 'transparent',
  }
}
