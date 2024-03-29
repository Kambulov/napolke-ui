import React from 'react'
import { Text, Grid, Link } from '@napolke-ui'
import { Github } from '@napolke-ui/icons'

function NameMadeDesigned() {
  return (
    <Link
      href="https://github.com/Kambulov"
      target="_blank"
      rel="noopener"
      underline
      aria-label="Link to Github Kambulov Danil"
    >
      Kambulov Danil
    </Link>
  )
}

function MadeDesigned() {
  return (
    <Grid.Container justify="flex-end">
      <Grid my={2}>
        <Text fs={0.75} b my={0}>
          Сделано с любовью
          <Github
            height={12}
            width={12}
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <NameMadeDesigned />
        </Text>
      </Grid>
    </Grid.Container>
  )
}

export default MadeDesigned
