import React, { useMemo } from 'react'
import {
  Button,
  useTheme,
  Select,
  Spacer,
  Text,
  Keyboard,
} from '@napolke-ui'
import { useConfigs } from 'lib/config-context'
import useLocale from 'lib/use-locale'
import Router, { useRouter } from 'next/router'
// import MoonIcon from '@napolke-ui/icons/moon'
// import SunIcon from '@geist-ui/icons/sun'
// import UserIcon from '@geist-ui/icons/user'
// import GitHubIcon from '@geist-ui/icons/github'
import {
  RUSSIAN_LANGUAGE_IDENT,
  ENGLISH_LANGUAGE_IDENT,
  GITHUB_URL,
} from 'lib/constants'

const Controls: React.FC<unknown> = React.memo(() => {
  const { updateChineseState } = useConfigs()
  const { pathname } = useRouter()
  const { locale } = useLocale()
   const { mode, toggleMode} = useTheme()
  const isRussian = useMemo(() => locale === RUSSIAN_LANGUAGE_IDENT, [locale])
  const nextLocalePath = useMemo(() => {
    const nextLocale = isRussian ? ENGLISH_LANGUAGE_IDENT : RUSSIAN_LANGUAGE_IDENT
    return pathname.replace(locale, nextLocale)
  }, [locale, pathname])

  // const switchThemes = (type: string) => {
  //   switchTheme(type)
  //   if (typeof window === 'undefined' || !window.localStorage) return
  //   window.localStorage.setItem('theme', type)
  // }
  const switchLanguages = () => {
    updateChineseState(!isRussian)
    Router.push(nextLocalePath)
  }
  const redirectGithub = () => {
    if (typeof window === 'undefined') return
    window.open(GITHUB_URL)
  }

  return (
    <div className="wrapper">
      <Keyboard
        h="28px"
        command
        font="12px"
        className="shortcuts"
        title="Command + K to search.">
        K
      </Keyboard>
      <Spacer w={0.75} />
      <Button
        w="28px"
        h="28px"
        py={0}
        px={0}
        onClick={switchLanguages}
        title={isRussian ? 'Переключить язык' : 'switch language'}>
        <Text font="13px" style={{ fontWeight: 500 }}>
          {isRussian ? 'Ru' : 'En'}
        </Text>
      </Button>
      <Spacer w={0.75} />
      <Button
        w="28px"
        h="28px"
        py={0}
        px={0}
        onClick={redirectGithub}
        title={isRussian ? 'GitHub' : 'GitHub Repository'}
      />
      <Spacer w={0.75} />
      <Select
        scale={0.5}
        h="28px"
        pure
        onChange={toggleMode}
        value={mode}
        title={isRussian ? 'Переключить тему' : 'Switch Themes'}>
        <Select.Option value="light">
          <span className="select-content">
            {/*<SunIcon size={14} /> {isRussian ? 'Светлая' : 'Light'}*/}
          </span>
        </Select.Option>
        <Select.Option value="dark">
          <span className="select-content">
            {/*<MoonIcon size={14} /> {isRussian ? 'Темная' : 'Dark'}*/}
          </span>
        </Select.Option>
      </Select>
      <style jsx>{`
        .wrapper {
          display: flex;
          align-items: center;
        }
        .wrapper :global(kbd.shortcuts) {
          line-height: 28px !important;
          cursor: help;
          opacity: 0.75;
          border: none;
        }
        .wrapper :global(.select) {
          width: 85px;
          min-width: 85px;
        }
        .select-content {
          width: auto;
          height: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .select-content :global(svg) {
          margin-right: 10px;
          margin-left: 2px;
        }
      `}</style>
    </div>
  )
})

export default Controls
