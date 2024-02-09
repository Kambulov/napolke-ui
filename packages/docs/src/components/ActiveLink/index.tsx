import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Text, Link } from '@napolke-ui'
import { Theme } from '@core/themes/presets'

export interface Props {
  onAcitve?: () => void
  href: string
  text: string
  target?: string
}

const ActiveLink: React.FC<Props> = React.memo(({ href, text, target }) => {
  const router = useRouter()
  const isActive = router.asPath === href

  const Component = target ? Link : NextLink

  return (
    <Component href={href} target={target}>
      <Text
        fs="14px"
        my={0}
        mb={1}
        b={isActive}
        ml="26px"
        style={{
          color: isActive
            ? Theme.palette.gray800.name
            : Theme.palette.gray600.name,
          cursor: 'pointer'
        }}
      >
        {text}
      </Text>
    </Component>
  )
})

ActiveLink.displayName = 'NuiActiveLink'
export default ActiveLink
