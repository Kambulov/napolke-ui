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
    url: '/docs/guide/getting-started'
  },
  {
    name: 'About Bolio UI',
    url: '/docs/guide/about-bolio-ui'
  },
  {
    name: 'Contribute',
    url: '/docs/guide/contribute'
  },
  {
    name: 'Bolio Icons',
    url: 'https://icons.bolio-ui.com/',
    target: '_blank'
  },
  {
    name: 'Frameworks',
    url: '',
    icon: 'Package'
  },
  {
    name: 'Example with Next.js',
    url: '/docs/guide/bolio-ui-plus-nextjs'
  },
  {
    name: 'Example with Vite',
    url: '/docs/guide/bolio-ui-plus-vite'
  },
  {
    name: 'Example with Remix',
    url: '/docs/guide/bolio-ui-plus-remix'
  },
  {
    name: 'Example with Gatsby',
    url: '/docs/guide/bolio-ui-plus-gatsby'
  },
  {
    name: 'Example with RedwoodJS',
    url: '/docs/guide/bolio-ui-plus-redwoodjs'
  },
  {
    name: 'Theme',
    url: '',
    icon: 'Target'
  },
  {
    name: 'Default Theme',
    url: '/docs/guide/default-theme'
  },
  {
    name: 'Customize Themes',
    url: '/docs/guide/customize-themes'
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
    url: '/docs/hooks/use-body-scroll'
  },
  {
    name: 'useClasses',
    url: '/docs/hooks/use-classes'
  },
  {
    name: 'useClickAway',
    url: '/docs/hooks/use-click-away'
  },
  {
    name: 'useClipboard',
    url: '/docs/hooks/use-clipboard'
  },
  {
    name: 'useCurrentState',
    url: '/docs/hooks/use-current-state'
  },
  {
    name: 'useInput',
    url: '/docs/hooks/use-input'
  },
  {
    name: 'useKeyboard',
    url: '/docs/hooks/use-keyboard'
  },
  {
    name: 'useMediaQuery',
    url: '/docs/hooks/use-media-query'
  },
  {
    name: 'useModal',
    url: '/docs/hooks/use-modal'
  },
  {
    name: 'useScale',
    url: '/docs/hooks/use-scale'
  },
  {
    name: 'useTabs',
    url: '/docs/hooks/use-tabs'
  },
  {
    name: 'useTheme',
    url: '/docs/hooks/use-theme'
  },
  {
    name: 'useToast',
    url: '/docs/hooks/use-toast'
  }
]
