import React from 'react'
import { Grid, Text } from '@napolke-ui'
import { mainColors } from './colors-data'

const getColorItem = (item: Record<string, any>) => {
  return (
    <Grid className="color" key={`color-item-${0}`}>
      <Grid.Container
        justify="flex-start"
        alignItems="center"
        direction="row"
        gap={2}
        mt={1}
      >
        <Grid direction="column">
          <Text h3 margin={0}>
            {item.name}
          </Text>
          <Text i fs="13px">
            {`--nui-color-${item.name}`}
          </Text>
        </Grid>
        <Grid
          className="container"
          height="50px"
          style={{
            width: 50,
            backgroundColor: item.value,
            borderRadius: 5
          }}
        />
      </Grid.Container>
    </Grid>
  )
}

const ColorsMain = () => {
  return (
    <Grid.Container
      justify="flex-start"
      alignItems="center"
      direction="row"
      gap={2.5}
    >
      {mainColors.map((item) => getColorItem(item))}
    </Grid.Container>
  )
}

export default ColorsMain
