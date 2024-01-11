import React, { useMemo } from 'react'
import { Spacer, Divider, Text } from '@napolke-ui'
import { VirtualAnchor } from '../pures'
import { useConfigs } from '../../lib/config-context'
import Contributors from './contributors'
import AttributesTitle from './attributes-title'
import AttributesTable from './attributes-table'

export interface AttributesProps {
   edit: string
}

const Attributes: React.FC<React.PropsWithChildren<AttributesProps>> = React.memo(
   ({ edit, children }) => {
      const { isRussian } = useConfigs()
      const path = edit.replace('/pages', 'pages')
      const apiTitles = useMemo(() => {
         if (React.Children.count(children) === 0) return null
         return (
            <>
               <Spacer h={1} />
               <h3>
                  <VirtualAnchor>APIs</VirtualAnchor>
               </h3>
               <AttributesTable>{children}</AttributesTable>
            </>
         )
      }, [children, isRussian])

      return (
         <>
            {apiTitles}
            <Divider font="12px" mt="80px">
               <Text p b type="secondary" style={{ userSelect: 'none' }}>
                  {isRussian ? 'grgr' : 'Contributors'}
               </Text>
            </Divider>
            <Contributors path={path} />
         </>
      )
   },
)

type AttributesComponent<P> = React.FC<P> & {
   Title: typeof AttributesTitle
   Table: typeof AttributesTable
}

export default Attributes as AttributesComponent<AttributesProps>
