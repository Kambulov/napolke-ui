import React, { useMemo } from 'react'
import { Spacer, Divider, Text } from 'components'
import { VirtualAnchor } from '../pures'
import { useConfigs } from '../../config-context'
import Contributors from './contributors'
import AttributesTitle from './attributes-title'
import AttributesTable from './attributes-table'

export interface AttributesProps {
  edit: string
}

const Attributes: React.FC<React.PropsWithChildren<AttributesProps>> = React.memo(
  ({ edit, children }) => {
    const { isChinese } = useConfigs()
    const path = edit.replace('/pages', 'pages')
    const apiTitles = useMemo(() => {
      if (React.Children.count(children) === 0) return null
      return (
        <>
          <Spacer h={1} />
          <h3>
            <VirtualAnchor>APIs</VirtualAnchor>
            {isChinese && ' / 接口文档'}
          </h3>
          <AttributesTable>{children}</AttributesTable>
        </>
      )
    }, [children, isChinese])

    return (
      <>
        {apiTitles}

      </>
    )
  },
)

type AttributesComponent<P> = React.FC<P> & {
  Title: typeof AttributesTitle
  Table: typeof AttributesTable
}

export default Attributes as AttributesComponent<AttributesProps>
