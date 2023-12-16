import React from 'react'
export interface Configs {
  isRussian?: boolean
  updateChineseState: (state: boolean) => void
  sidebarScrollHeight: number
  updateSidebarScrollHeight: (height: number) => void
  switchTheme: (type: string) => void
}

export const defaultConfigs: Configs = {
  sidebarScrollHeight: 0,
  updateSidebarScrollHeight: () => {},
  updateChineseState: () => {},
  switchTheme: () => {},
}

export const ConfigContext = React.createContext<Configs>(defaultConfigs)

export const useConfigs = (): Configs => React.useContext(ConfigContext)
