import React from 'react'
import Themes from '../themes'
import { NapolkeUIThemes } from '../themes'

const defaultTheme = Themes.getPresetStaticTheme()

export const ThemeContext: React.Context<NapolkeUIThemes> =
  React.createContext<NapolkeUIThemes>(defaultTheme)
export const useTheme = (): NapolkeUIThemes => React.useContext<NapolkeUIThemes>(ThemeContext)
