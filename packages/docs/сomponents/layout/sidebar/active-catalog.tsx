import React from 'react'
import { useRouter } from 'next/router'
import {Theme} from "../../../../core/components/themes/presets";

export interface Props {
  name: string
  localeName?: string
}

const ActiveCatalog: React.FC<Props> = React.memo(({ name, localeName, ...props }) => {
  const { pathname } = useRouter()
  const isActive = pathname.includes(`/${name}/`)

  return (
    <span {...props} className={isActive ? 'active' : ''}>
      {localeName || name}
      <style jsx>{`
        span {
          font-size: 0.8125rem;
          transition: all 0.2s ease;
          color: ${Theme.palette.gray500.name};
          text-transform: uppercase;
          letter-spacing: 1.3px;
        }

        .active {
          color: ${Theme.palette.black.name};
        }
      `}</style>
    </span>
  )
})

export default ActiveCatalog
