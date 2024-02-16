import {NapolkeUIThemesPalette, Theme} from '../themes/presets'
import { ButtonTypes } from '../utils/prop-types'
import { ButtonProps } from './button'
import { addColorAlpha } from '../utils/color'

export interface ButtonColorGroup {
  bg: string
  border: string
  color: string
}

export const getButtonGhostColors = (
  palette: NapolkeUIThemesPalette,
  type: ButtonTypes,
): ButtonColorGroup | null => {
  const colors: { [key in ButtonTypes]?: ButtonColorGroup } = {
    secondary: {
      bg: palette.background.name,
      border: palette.secondary.name,
      color: palette.secondary.name,
    },
    primary: {
      bg: palette.background.name,
      border: palette.primary.name,
      color: palette.primary.name,
    },
    tertiary: {
      bg: palette.background.name,
      border: palette.tertiary.name,
      color: palette.tertiary.name,
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
  palette: NapolkeUIThemesPalette,
  props: ButtonProps,
): ButtonColorGroup => {
  const { type, disabled, ghost } = props
  const colors: { [key in ButtonTypes]?: ButtonColorGroup } = {
    default: {
      bg: palette.background.value,
      border: palette.border.name,
      color: palette.gray500.name,
    },
    secondary: {
      bg: palette.secondary.value,
      border: palette.secondary.name,
      color: palette.white.name,
    },
    success: {
      bg: palette.success.value,
      border: palette.success.name,
      color: palette.white.name,
    },
    warning: {
      bg: palette.warning.value,
      border: palette.warning.name,
      color: palette.white.name,
    },
    error: {
      bg: palette.error.value,
      border: palette.error.name,
      color: palette.white.name,
    },
    tertiary: {
      bg: palette.tertiary.value,
      border: palette.tertiary.name,
      color: palette.white.name,
    },
    primary: {
      bg: palette.primary.value,
      border: palette.primary.name,
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
      bg: palette.gray300.value,
      border: palette.gray200.name,
      color: palette.gray500.name,
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
  palette: NapolkeUIThemesPalette,
  type: ButtonTypes,
): ButtonColorGroup | null => {
  const colors: { [key in ButtonTypes]?: ButtonColorGroup } = {
    primary: {
      bg: palette.primary.name,
      border: palette.primary.name,
      color: palette.white.name,
    },
    secondary: {
      bg: palette.secondary.name,
      border: palette.secondary.name,
      color: palette.white.name,
    },
    tertiary: {
      bg: palette.tertiary.name,
      border: palette.tertiary.name,
      color: palette.white.name,
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
  }
  const withoutLightType = type.replace('-light', '') as ButtonTypes
  return colors[withoutLightType] || null
}

export const getButtonHoverColors = (
  palette: NapolkeUIThemesPalette,
  props: ButtonProps,
): ButtonColorGroup => {
  const { type, disabled, loading, shadow, ghost } = props
  const defaultColor = getButtonColors(palette, props)

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
      bg: palette.secondaryLight.value,
      border: palette.secondaryLight.name,
      color: palette.white.name,
    },
    success: {
      bg: palette.successLight.value,
      border: palette.successLight.name,
      color: palette.white.name,
    },
    warning: {
      bg: palette.warningLight.value,
      border: palette.warningLight.value,
      color: palette.white.name,
    },
    tertiary: {
      bg: palette.tertiaryLight.value,
      border: palette.tertiaryLight.value,
      color: palette.white.name,
    },
    error: {
      bg: palette.errorLight.value,
      border: palette.error.value,
      color: palette.white.name,
    },
    primary: {
      bg: palette.primaryLight.value,
      border: palette.primaryLight.name,
      color: palette.white.name,
    },
    abort: {
      bg: palette.gray200.value,
      border: palette.gray200.name,
      color: palette.gray500.name,
    },
  }
  if (disabled)
    return {
      bg: palette.gray300.value,
      border: palette.gray200.name,
      color: palette.gray500.name,
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

export const getButtonDripColor = (palette: NapolkeUIThemesPalette, props: ButtonProps) => {
  const { type } = props
  const isLightHover = type!.endsWith('light')
  const hoverColors = getButtonHoverColors(palette, props)
  return isLightHover
    ? addColorAlpha(hoverColors.bg, 0.65)
    : addColorAlpha(palette.gray200.value, 0.65)
}
