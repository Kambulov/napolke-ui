import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// import dynamic from 'next/dynamic'
import {
  Container,
  Grid,
  Spacer,
  Button,
  Tabs,
  Link,
  useTheme,
  useBodyScroll
} from '@napolke-ui'
import { Sun, Moon, Github, Instagram, Menu } from '../../../../icons/dist'
import { useMediaQuery } from 'src/utils/use-media-query'
import Logo from 'src/components/Logo'
import NavigationMobile from 'src/components/NavigationMobile'
import { Theme } from '@core/themes/presets'
import { GITHUB_URL } from '../../utils/constants'

const Navigation: React.FC = () => {
  const { mode, toggleMode } = useTheme()
  const router = useRouter()
  const [expanded, setExpanded] = useState<boolean>(false)
  const [, setBodyHidden] = useBodyScroll(null, { delayReset: 300 })
  const isMobile = useMediaQuery(1280)

  useEffect(() => {
    setBodyHidden(expanded)
  }, [expanded, setBodyHidden])

  useEffect(() => {
    if (!isMobile) {
      setExpanded(false)
    }
  }, [isMobile])

  useEffect(() => {
    const handleRouteChange = () => {
      setExpanded(false)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    <>
      <nav className="menu_wrapper">
        <Container>
          <div className="menu_sticky">
            <Grid.Container gap={1} justify="center">
              {!isMobile ? (
                <>
                  <Grid xs={6} md={4} justify="flex-start">
                    <Logo />
                  </Grid>

                  <Grid xs={0} md={4} justify="center">
                    <div className="tabs">
                      <Tabs
                        value={router.asPath}
                        onChange={(route) => router.push(route)}
                        align="center"
                        hideDivider
                        hideBorder
                      >
                        <Tabs.Item
                          label="Инструкции"
                          value="/guide/getting-started"
                        />
                        <Tabs.Item
                          label="Компоненты"
                          value="/components/avatar"
                        />
                        <Tabs.Item
                          label="Хуки"
                          value="/hooks/use-body-scroll"
                        />
                      </Tabs>
                    </div>
                  </Grid>

                  <Grid xs={6} md={4} justify="flex-end">
                    <div className="controls">
                      <>
                        <Link
                          href={GITHUB_URL}
                          target="_blank"
                          aria-label="Link to Github Napolke UI"
                        >
                          <Button
                            w="28px"
                            h="28px"
                            py={0}
                            px={0}
                            className="theme-button"
                            aria-label="Github Napolke UI"
                            type="abort"
                          >
                            <Github fontSize={16} />
                          </Button>
                        </Link>
                        <Link
                          href="https://www.instagram.com/kambulov161/"
                          target="_blank"
                          aria-label="Link to Instagram"
                        >
                          <Button
                            w="28px"
                            h="28px"
                            py={0}
                            px={0}
                            className="theme-button"
                            aria-label="Instagram Kambulov"
                            type="abort"
                          >
                            <Instagram fontSize={16} />
                          </Button>
                        </Link>
                        <Button
                          w="28px"
                          h="28px"
                          py={0}
                          px={0}
                          aria-label="Toggle Dark mode"
                          className="theme-button"
                          type="abort"
                          onClick={toggleMode}
                        >
                          {mode === 'dark' ? (
                            <Sun fontSize={16} />
                          ) : (
                            <Moon fontSize={16} />
                          )}
                        </Button>
                        <Spacer w={0.5} />
                        <Spacer w={1} />
                      </>
                    </div>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid xs={2} md={4} justify="flex-start">
                    <Logo name="Bolio UI" />
                  </Grid>

                  <Grid xs={10} md={8} justify="flex-end">
                    {/*<SearchInput />*/}
                    <Spacer w={1} />
                    <div className="controls">
                      <Button
                        w="28px"
                        h="28px"
                        py={0}
                        px={0}
                        aria-label="Toggle Dark mode"
                        className="theme-button"
                        type="abort"
                        onClick={toggleMode}
                      >
                        {mode === 'dark' ? (
                          <Sun fontSize={16} />
                        ) : (
                          <Moon fontSize={16} />
                        )}
                      </Button>
                      <Button
                        className="menu-toggle"
                        auto
                        type="abort"
                        aria-label="Menu Toogle"
                        onClick={() => setExpanded(!expanded)}
                      >
                        <Menu fontSize={16} />
                      </Button>
                    </div>
                  </Grid>
                </>
              )}
            </Grid.Container>
          </div>
        </Container>
      </nav>
      <NavigationMobile expanded={expanded} />
      <style jsx>{`
        .menu_wrapper {
          height: 60px;
          position: relative;
          overflow: hidden;
          z-index: 99;
        }

        .menu_sticky {
          position: fixed;
          z-index: 1100;
          top: 0;
          right: 0;
          left: 0;
          box-shadow: ${mode === 'dark'
            ? 'rgba(255, 255, 255, 0.1) 0 0 20px 0'
            : 'rgba(0, 0, 0, 0.1) 0 0 20px 0'};
          backdrop-filter: saturate(180%) blur(10px);
          transition: box-shadow 1s ease;
          transition: backdrop-filter 1s ease;
          padding-left: 15px;
          padding-right: 15px;
        }

        .menu_wrapper :global(.theme-button) {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          padding: 0;
        }

        .logo {
          padding: 0 ${Theme.layout.gap.name};
          margin-bottom: 3px;
        }

        .tabs {
          padding: 0 ${Theme.layout.gap.name};
          margin-bottom: 3px;
        }

        .tabs :global(.content) {
          display: none;
        }

        @media only screen and (max-width: ${Theme.breakpoints.md.max}) {
          .tabs {
            display: none;
          }
        }

        .controls {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          height: 50px;
        }

        .controls :global(.menu-toggle) {
          display: flex;
          align-items: center;
          height: 50px;
        }
      `}</style>
    </>
  )
}

export default Navigation
