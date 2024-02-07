import React from 'react'
import { useRouter } from 'next/router'
import { Text, Row } from '@napolke-ui'
import * as Icons from '@napolke-ui/icons'
import {Theme} from "@core/themes/presets";

export interface Props {
  name: string
  icon?: Icon
}

type Icon = keyof typeof Icons

// const renderIcon = (icon: Icon, color: string) => {
//   const CurrentIcon = Icons[icon]
//   return <CurrentIcon color={color} /> || null
// }

const ActiveCategory: React.FC<Props> = React.memo(
  ({ name, icon, ...props }) => {
    const router = useRouter()
    const isActive = router.asPath.includes(`/${name}/`)

    return (
      <Row
        align="middle"
        style={{
          marginBottom: 10
        }}
      >
        {/*{icon && renderIcon(icon, Theme.palette.background.name)}*/}
        <Text
          {...props}
          b
          fs="18px"
          my={0}
          ml={0.5}
          style={{
            color: isActive ? Theme.palette.gray800.name : Theme.palette.gray800.name
          }}
        >
          {name}
        </Text>
      </Row>
    )
  }
)

ActiveCategory.displayName = 'ActiveCategory'
export default ActiveCategory
