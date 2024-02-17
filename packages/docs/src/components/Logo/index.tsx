import React from 'react'
import { Link, Text, Image } from '@napolke-ui'
import { Theme } from '@core/themes/presets'

interface Props {
  name?: string
}

export type HeroProps = Props

function Logo({ name }: Props) {
  return (
    <Link href="/" aria-label="napolke ui">
      <Text b>
        <Image width="100px" height="50px" src={'../../images/svg/Logo.svg'} />
        {name && <div className="container">{name}</div>}
      </Text>
      <style jsx>{`
        .container {
          padding-left: 1px;
          display: inline-flex;
        }

        @media only screen and (max-width: ${Theme.breakpoints.xs.max}) {
          .container {
            display: none;
          }
        }
      `}</style>
    </Link>
  )
}

export default Logo
