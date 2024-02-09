export interface SidebarItemsI {
  name: string
  url?: string
  icon?: string
  target?: string
}
export const guide: SidebarItemsI[] = [
  {
    name: 'Guide',
    url: '',
    icon: 'Book'
  },
  {
    name: 'Getting Started',
    url: '/guide/getting-started'
  },
  {
    name: 'Colors',
    url: '/guide/getting-started'
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
    name: 'Text',
    url: '/components/text'
  }
]

export const hooks: SidebarItemsI[] = [
  {
    name: 'Hooks22',
    url: '',
    icon: 'Settings'
  },
  {
    name: 'useBodyScroll',
    url: '/hooks/use-body-scroll'
  }
]
