import React from 'react'
import {  Link} from '@napolke-ui'
import NextLink from 'next/link'
import {Theme} from "../../../core/components/themes/presets";

export type HomeCellProps = {
  url: string
  title: string
  desc: string
  icon: React.ReactNode
}

const HomeCell: React.FC<HomeCellProps> = ({ url, title, desc, icon }) => {
  return (
    <NextLink href={url} passHref>
      <Link>
          <h4 className="feature__title">
            <div className="feature__icon">{icon}</div>
            {title}
          </h4>
          <p className="feature__description">{desc}</p>
        <style jsx>{`
          .feature__title {
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: var(--background-color);
          }
          .feature__icon {
            height: 2.5rem;
            width: 2.5rem;
            padding: 0.625rem;
            margin-right: ${Theme.layout.gapHalf.name};
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(#3291ff, #0761d1);
            color: #fff;
            border-radius: 2rem;
          }
          .feature__icon :global(svg) {
            width: 100%;
            height: 100%;
          }
          .feature__description {
            color: ${Theme.palette.gray500.name};
          }
        `}</style>
      </Link>
    </NextLink>
  )
}

export default HomeCell
