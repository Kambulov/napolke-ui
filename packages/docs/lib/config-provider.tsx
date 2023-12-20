import React, { useMemo, useState } from 'react'
import { ConfigContext, Configs } from 'lib/config-context'
import { useRouter } from 'next/router'
import type { DeepPartial } from '../../core/components/utils/types'
// import { useTheme } from '@napolke-ui'
import { RUSSIAN_LANGUAGE_IDENT } from './constants'
import {NapolkeUIThemes} from "../../core/components/themes/presets";

const defaultProps = {}

export type ConfigProviderProps = {
  onThemeChange?: (themes: DeepPartial<NapolkeUIThemes>) => void
  onThemeTypeChange?: (type: string) => void
}

const ConfigProvider: React.FC<React.PropsWithChildren<ConfigProviderProps>> = React.memo(
  ({
    onThemeChange,
    onThemeTypeChange,
    children,
  }: React.PropsWithChildren<ConfigProviderProps> & typeof defaultProps) => {
    // const theme = useTheme()
    const { pathname } = useRouter()
    const [isRussian, setIsChinese] = useState<boolean>(() =>
      pathname.includes(RUSSIAN_LANGUAGE_IDENT),
    )
    const [scrollHeight, setScrollHeight] = useState<number>(0)
    // const [customTheme, setCustomTheme] = useState<NapolkeUIThemes>(theme)

    const updateSidebarScrollHeight = (height: number) => setScrollHeight(height)
    const updateRussianState = (state: boolean) => setIsChinese(state)
    // const updateCustomTheme = (nextTheme: DeepPartial<NapolkeUIThemes>) => {
    //   const mergedTheme = Themes.create(theme, { ...nextTheme, type: CUSTOM_THEME_TYPE })
    //   setCustomTheme(mergedTheme)
    //   onThemeChange && onThemeChange(mergedTheme)
    // }
    const switchTheme = (type: string) => {
      onThemeTypeChange && onThemeTypeChange(type)
    }

    const initialValue = useMemo<Configs>(
      () => ({
        onThemeChange,
        isRussian,
        // customTheme,
        switchTheme,
        // updateCustomTheme,
        updateRussianState,
        sidebarScrollHeight: scrollHeight,
        updateSidebarScrollHeight,
      }),
      [onThemeChange, scrollHeight, isRussian],
    )

    return (
      <ConfigContext.Provider value={initialValue}>{children}</ConfigContext.Provider>
    )
  },
)

ConfigProvider.defaultProps = defaultProps
ConfigProvider.displayName = 'NuiConfigProvider'
export default ConfigProvider
