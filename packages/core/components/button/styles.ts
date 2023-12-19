import {NapolkeIThemesPalette, Theme} from '../themes/presets'
import { ButtonTypes } from '../utils/prop-types'
import { ButtonProps } from './button'
import { addColorAlpha } from '../utils/color'

export interface ButtonColorGroup {
  bg: string
  border: string
  color: string
}

export const getButtonGhostColors = (
  palette: NapolkeIThemesPalette,
  type: ButtonTypes,
): ButtonColorGroup | null => {
  const colors: { [key in ButtonTypes]?: ButtonColorGroup } = {
    secondary: {
      bg: palette.background.name,
      border: palette.black.name,
      color: palette.black.name,
    },
    success: {
      bg: palette.background.name,
      border: palette.success.name,
      color: palette.success.name,
    },
    warning: {
      bg: palette.background.name,
      border: palette.warning.name,
      color: palette.warning.name,
    },
    error: {
      bg: palette.background.name,
      border: palette.error.name,
      color: palette.error.name,
    },
  }

  return colors[type] || null
}

export const getButtonColors = (
  palette: NapolkeIThemesPalette,
  props: ButtonProps,
): ButtonColorGroup => {
  const { type, disabled, ghost } = props
  const colors: { [key in ButtonTypes]?: ButtonColorGroup } = {
    default: {
      bg: palette.background.name,
      border: palette.border.name,
      color: palette.gray500.name,
    },
    secondary: {
      bg: palette.black.name,
      border: palette.black.name,
      color: palette.background.name,
    },
    success: {
      bg: palette.success.name,
      border: palette.success.name,
      color: palette.white.name,
    },
    warning: {
      bg: palette.warning.name,
      border: palette.warning.name,
      color: palette.white.name,
    },
    error: {
      bg: palette.error.name,
      border: palette.error.name,
      color: palette.white.name,
    },
    abort: {
      bg: 'transparent',
      border: 'transparent',
      color: palette.gray500.name,
    },
  }
  if (disabled)
    return {
      bg: palette.gray50.name,
      border: palette.gray200.name,
      color: palette.gray300.name,
    }

  /**
   * The '-light' type is the same color as the common type,
   * only hover's color is different.
   * e.g.
   *   Color['success'] === Color['success-light']
   *   Color['warning'] === Color['warning-light']
   */
  const withoutLightType = type?.replace('-light', '') as ButtonTypes
  const defaultColor = colors.default as ButtonColorGroup

  if (ghost) return getButtonGhostColors(Theme.palette, withoutLightType) || defaultColor
  return colors[withoutLightType] || defaultColor
}

export const getButtonGhostHoverColors = (
  palette: NapolkeIThemesPalette,
  type: ButtonTypes,
): ButtonColorGroup | null => {
  const colors: { [key in ButtonTypes]?: ButtonColorGroup } = {
    secondary: {
      bg: palette.black.name,
      border: palette.background.name,
      color: palette.background.name,
    },
    success: {
      bg: palette.success.name,
      border: palette.background.name,
      color: palette.white.name,
    },
    warning: {
      bg: palette.warning.name,
      border: palette.background.name,
      color: palette.white.name,
    },
    error: {
      bg: palette.error.name,
      border: palette.background.name,
      color: palette.white.name,
    },
  }
  const withoutLightType = type.replace('-light', '') as ButtonTypes
  return colors[withoutLightType] || null
}

export const getButtonHoverColors = (
  palette: NapolkeIThemesPalette,
  props: ButtonProps,
): ButtonColorGroup => {
  const { type, disabled, loading, shadow, ghost } = props
  const defaultColor = getButtonColors(palette, props)
  const alphaBackground = addColorAlpha(defaultColor.bg, 0.85)
  const colors: {
    [key in ButtonTypes]: Omit<ButtonColorGroup, 'color'> & {
      color?: string
    }
  } = {
    default: {
      bg: palette.background.value,
      border: palette.black.value,
    },
    secondary: {
      bg: palette.background.value,
      border: palette.black.value,
    },
    success: {
      bg: palette.background.value,
      border: palette.success.value,
    },
    warning: {
      bg: palette.background.value,
      border: palette.warning.value,
    },
    error: {
      bg: palette.background.value,
      border: palette.error.value,
    },
    abort: {
      bg: 'transparent',
      border: 'transparent',
      color: palette.gray500.value,
    },
    'secondary-light': {
      ...defaultColor,
      bg: alphaBackground,
    },
    'success-light': {
      ...defaultColor,
      bg: alphaBackground,
    },
    'warning-light': {
      ...defaultColor,
      bg: alphaBackground,
    },
    'error-light': {
      ...defaultColor,
      bg: alphaBackground,
    },
  }
  if (disabled)
    return {
      bg: palette.gray50.value,
      border: palette.gray200.value,
      color: palette.gray500.value,
    }
  if (loading)
    return {
      ...defaultColor,
      color: 'transparent',
    }
  if (shadow) return defaultColor

  const hoverColor =
    (ghost ? getButtonGhostHoverColors(palette, type!) : colors[type!]) || colors.default
  return {
    ...hoverColor,
    color: hoverColor.color || hoverColor.border,
  }
}

export interface ButtonCursorGroup {
  cursor: string
  events: string
}

export const getButtonCursor = (
  disabled: boolean,
  loading: boolean,
): ButtonCursorGroup => {
  if (disabled)
    return {
      cursor: 'not-allowed',
      events: 'auto',
    }
  if (loading)
    return {
      cursor: 'default',
      events: 'none',
    }

  return {
    cursor: 'pointer',
    events: 'auto',
  }
}

export const getButtonDripColor = (palette: NapolkeIThemesPalette, props: ButtonProps) => {
  const { type } = props
  const isLightHover = type!.endsWith('light')
  const hoverColors = getButtonHoverColors(palette, props)
  return isLightHover
    ? addColorAlpha(hoverColors.bg, 0.65)
    : addColorAlpha(palette.gray200.value, 0.65)
}
