import React from 'react'
export interface Configs {
  isRussian?: boolean
  updateRussianState: (state: boolean) => void
  sidebarScrollHeight?: number
  updateSidebarScrollHeight?: (height: number) => void
  switchTheme?: (type: string) => void
}

export const defaultConfigs: Configs = {
  sidebarScrollHeight: 0,
  updateSidebarScrollHeight: () => {},
  updateRussianState: () => {},
  switchTheme: () => {},
}

export const ConfigContext = React.createContext<Configs>(defaultConfigs)

export const useConfigs = (): Configs => React.useContext(ConfigContext)
