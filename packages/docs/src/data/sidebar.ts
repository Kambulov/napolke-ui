export interface SidebarItemsI {
  name: string
  url?: string
  icon?: string
  target?: string
}
export const guide: SidebarItemsI[] = [
  {
    name: 'Инструкции',
    url: '',
    icon: 'Book'
  },
  {
    name: 'Начало работы',
    url: '/guide/getting-started'
  },
  {
    name: 'Цветовая палитра',
    url: '/guide/colors'
  }
]

export const components: SidebarItemsI[] = [
  {
    name: 'Компоненты',
    url: '',
    icon: 'Grid'
  },
  {
    name: 'Avatar',
    url: '/components/avatar'
  },
  {
    name: 'Button',
    url: '/components/button'
  },
  {
    name: 'Text',
    url: '/components/text'
  }
]

export const hooks: SidebarItemsI[] = [
  {
    name: 'Хуки',
    url: '',
    icon: 'Settings'
  },
  {
    name: 'useBodyScroll',
    url: '/hooks/use-body-scroll'
  }
]
