import React from 'react'
import { VirtualAnchor } from '../pures'
import { Code } from '@napolke-ui'
import { Theme } from '../../../core/components/themes/presets'

export interface AttributesTitleProps {
  alias?: string
}

const getAlias = (alias?: string) => {
  if (!alias) return null
  return (
    <small>
      <span>[</span>
      {'alias'}: <Code>{alias}</Code>
      <span>]</span>
    </small>
  )
}
const AttributesTitle: React.FC<React.PropsWithChildren<
  AttributesTitleProps
>> = React.memo(({ children, alias }) => {
  return (
    <>
      <h4 className="title">
        <Code>
          <VirtualAnchor pure>{children}</VirtualAnchor>
        </Code>
        {getAlias(alias)}
      </h4>

      <style jsx>{`
        h4 {
          display: inline-flex;
          align-items: center;
          height: 2rem;
          padding-left: ${Theme.layout.gapQuarter.name};
          padding-right: ${Theme.layout.gapHalf.name};
          background-color: ${Theme.palette.gray50.name};
          border-radius: ${Theme.layout.radius.name};
          margin-bottom: 0;
        }

        h4 :global(small) {
          font-size: 0.65em;
          padding-left: 0.65rem;
          color: ${Theme.palette.gray400.name};
          align-self: flex-end;
          line-height: 1.6rem;
        }

        h4 :global(span) {
          color: ${Theme.palette.gray500.name};
        }
      `}</style>
    </>
  )
})

export default AttributesTitle
