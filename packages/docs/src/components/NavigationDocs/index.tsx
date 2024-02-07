import React from 'react'
import NextLink from 'next/link'
import { Grid, Card, Row, Text } from '@napolke-ui'
import {
  ChevronRight as ChevronRightIcon,
} from '@napolke-ui/icons'
import { useIsMobile } from 'src/utils/use-media-query'
import {Theme} from "@core/themes/presets";

export interface NavigationDocsProps {
  next: Docs
  previous: Docs
}

export interface Docs {
  name: string
  url: string
}

function NavigationDocs({ next, previous }: NavigationDocsProps) {
  const isMobile = useIsMobile()

  return (
    <Grid.Container gap={2} justify="center" style={{ margin: '25px 0' }}>
      <Grid xs={6} sm={6} md={6} justify="flex-start">
        {previous && previous.url && (
          <NextLink href={previous.url} passHref>
            <Card
              padding={isMobile ? 0 : 1}
              mt={2}
              style={{
                backgroundColor: 'transparent',
                backdropFilter: 'saturate(180%) blur(10px)',
                cursor: 'pointer'
              }}
              hoverable
              width="100%"
            >
              <Row align="middle" justify="space-between">
                <ChevronRightIcon />
                <div style={{ textAlign: 'right' }}>
                  <Text my={0}>Previous</Text>
                  <Text
                    fs={0.9}
                    my={0}
                    style={{ color: Theme.palette.gray400.name }}
                  >
                    {previous.name}
                  </Text>
                </div>
              </Row>
            </Card>
          </NextLink>
        )}
      </Grid>
      <Grid xs={6} sm={6} md={6} justify="flex-end">
        {next && next.url && (
          <NextLink href={next.url} passHref>
            <Card
              mt={2}
              padding={isMobile ? 0 : 1}
              style={{
                backgroundColor: 'transparent',
                backdropFilter: 'saturate(180%) blur(10px)',
                cursor: 'pointer'
              }}
              hoverable
              width="100%"
            >
              <Row align="middle" justify="space-between">
                <div style={{ textAlign: 'left' }}>
                  <Text my={0}>Next</Text>
                  <Text
                    fs={0.9}
                    my={0}
                    style={{ color: Theme.palette.gray400.name }}
                  >
                    {next.name}
                  </Text>
                </div>
                <ChevronRightIcon />
              </Row>
            </Card>
          </NextLink>
        )}
      </Grid>
    </Grid.Container>
  )
}

export default NavigationDocs
