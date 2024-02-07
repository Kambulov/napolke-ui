import React, { useMemo } from 'react'
import { Grid } from '@napolke-ui'
import {guide, components, hooks, SidebarItemsI} from 'src/data/sidebar'
import ActiveLink from '../ActiveLink'
import ActiveCategory from '../ActiveCategory'
import {Theme} from "@core/themes/presets";
import * as Icons from "@napolke-ui/icons";

export interface SidebarProps {
  sidebar: keyof typeof sidebarItems;
}

const sidebarItems = {
  guide: guide,
  components: components,
  hooks: hooks
}

function Sidebar({ sidebar}: SidebarProps) {

  const items: SidebarItemsI[] = useMemo(() => {
    return sidebarItems[sidebar]
  }, [sidebar])
  console.log('items',items)
  return (
    <div className="sides box">
      {items.map((item, index) => {
        return (
          <Grid.Container gap={2} key={`${item.name}-${index}`}>
            {!item.url && <ActiveCategory name={item.name} icon={item.icon as  keyof typeof Icons} />}
            {item.url && (
              <ActiveLink
                href={item.url}
                text={item.name}
                target={item.target}
              />
            )}
          </Grid.Container>
        )
      })}
      <style jsx>{`
        .sides {
          width: 100%;
          padding-bottom: ${Theme.layout.gap.name};
        }
        .box {
          overflow-y: auto;
          overflow-x: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          /* align-items: center; */
          /* cursor: pointer; */
        }
        /* .box::-webkit-scrollbar {
          display: none;
        }
        .box {
          -ms-overflow-style: none;
          scrollbar-width: none;
        } */
        .box::-webkit-scrollbar {
          width: 0;
          background-color: transparent;
        }
        /* .box > :global(.item) {
          margin-bottom: 12pt;
        } */
      `}</style>
    </div>
  )
}

Sidebar.displayName = 'NuiSidebar'
export default Sidebar
