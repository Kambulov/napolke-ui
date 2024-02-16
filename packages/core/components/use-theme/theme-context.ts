import React from 'react'
import {NapolkeUIThemesContext} from "../themes/types";

export const ThemeContext: React.Context<NapolkeUIThemesContext> =
   React.createContext<NapolkeUIThemesContext>({
      mode: '',
      toggleMode: () => {}
   })
export const useTheme = (): NapolkeUIThemesContext => React.useContext<NapolkeUIThemesContext>(ThemeContext)