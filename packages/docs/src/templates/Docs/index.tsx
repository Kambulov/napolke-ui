import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { Container, Grid, Image } from '../../../../core/components'
import { Heading, getHeadings } from 'src/utils/get-headings'
import { useMediaQuery } from 'src/utils/use-media-query'
import { Action, useRegisterActions } from 'kbar'
import { getId } from '@core/utils/collections'
import Sidebar from 'src/components/Sidebar'
import SidebarHeading from 'src/components/SidebarHeading'
import MadeDesigned from 'src/components/MadeDesigned'
import NavigationDocs from 'src/components/NavigationDocs'
import { guide, components, hooks } from 'src/data/sidebar'

export interface Meta {
  title: string
  description?: string
  sidebar: 'guide' | 'components' | 'hooks'
  group: string
  index: number
}

export type DocsTemplateProps = {
  children: React.ReactNode
  meta: Meta
}

const sidebarItems: any = {
  guide: guide,
  components: components,
  hooks: hooks
}

export  const Docs: React.FC<React.PropsWithChildren<
  DocsTemplateProps
>> = React.memo(({ children, meta }) => {
  const router = useRouter()
  const isMobile = useMediaQuery(650)

  const [headings, setHeadings] = useState<Heading[]>([])

  useEffect(() => {
    setHeadings(getHeadings())
  }, [])

  const { title } = meta

  const homeAction: Action = React.useMemo(() => {
    return {
      id: getId(),
      name: 'Go Home',
      section: 'Scope',
      icon: 'Home',
      shortcut: [],
      keywords: 'home, return, back, landing, page, init, initial',
      children: [],
      perform: () => router.push('/')
    }
  }, [router])

  useRegisterActions([homeAction].filter(Boolean))

  const items = useMemo(() => {
    return sidebarItems[meta.sidebar]
  }, [meta.sidebar])

  const currentPostIndex = items.findIndex((p: any) => p.name === title)
  const nextPost = items[currentPostIndex + 1] ?? null
  const prevPost = items[currentPostIndex - 1] ?? null

  return (
    <>
      <Container style={{ maxWidth: 1300 }}>
        <Grid.Container justify="center">
          <Grid xs={0} sm={0} md={0} lg={2}>
            <aside
              style={{
                height: 'calc(100% - 2rem - 96px + var(--nui-page-nav-height))',
                position: 'fixed',
                top: '80px',
                bottom: '2rem',
                width: '250px',
                marginTop: '10px',
                zIndex: 2
              }}
            >
              <Sidebar sidebar={meta.sidebar} />
            </aside>
          </Grid>
          <Grid xs={12} sm={12} md={12} lg={8}>
            <div
              style={{
                width: isMobile ? '95%' : '80%',
                margin: '0 auto',
                marginTop: '30px',
                zIndex: 2
              }}
            >
              {children}
              <NavigationDocs previous={prevPost} next={nextPost} />
              <MadeDesigned />
            </div>
          </Grid>
          <Grid xs={0} sm={0} md={0} lg={2}>
            <aside
              style={{
                height: 'calc(100% - 2rem - 96px + var(--nui-page-nav-height))',
                position: 'fixed',
                top: '80px',
                bottom: '2rem',
                marginTop: '10px',
                width: '250px',
                zIndex: 2
              }}
            >
              <SidebarHeading headings={headings} />
            </aside>
          </Grid>
        </Grid.Container>
      </Container>
      {isMobile ? (
        <>
          <Image
            src="/img/png/home/hero-bg.png"
            alt="docs background gradient blue"
            draggable={false}
            style={{
              position: 'fixed',
              top: '-10%',
              right: '-35%',
              zIndex: 0
            }}
          />
          <Image
            src="/img/png/home/hero-bg.png"
            alt="docs background gradient violet"
            draggable={false}
            style={{
              position: 'fixed',
              top: '45%',
              left: '-35%',
              zIndex: 0
            }}
          />
        </>
      ) : (
        <>
          <Image
            src="/images/png/gradient-bg.png"
            alt="docs background gradient"
            draggable={false}
            style={{
              position: 'fixed',
              bottom: '-50%',
              top: '-40%',
              right: '-10%',
              zIndex: 0
            }}
          />
          <Image
            src="/images/png/gradient-bg.png"
            alt="docs background gradient"
            draggable={false}
            style={{
              position: 'fixed',
              bottom: '-50%',
              left: '-20%',
              right: '-50%',
              zIndex: 0
            }}
          />
        </>
      )}
    </>
  )
})
