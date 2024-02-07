import React from 'react'
import NextLink from 'next/link'
import { Text, Link } from '@napolke-ui'
import { ChevronRight } from '@napolke-ui/icons'
import { useRouter } from 'next/router'
import { menuMobile } from 'src/data/menuMobile'
import {Theme} from "@core/themes/presets";

interface Props {
  expanded: boolean
}

const MenuMobile: React.FC<Props> = ({ expanded }) => {
  const { pathname } = useRouter()
  const [expandedGroupName, setExpandedGroupName] = React.useState<
    string | null
  >(null)

  const handleGroupClick = (name: string) => {
    setExpandedGroupName(expandedGroupName === name ? null : name)
  }

  if (!expanded) return null

  return (
    <div className="mobile-menu">
      <div className="content">
        <Text className={`fadein ${pathname === `/` ? 'active' : ''}`} ml={1}>
          Documentation
        </Text>

        {menuMobile.map((item, index) => (
          <div
            key={item.name}
            className="fadein"
            style={{ animationDelay: `${(index + 1) * 50}ms` }}
          >
            <button
              className={`menu-item ${
                expandedGroupName === item.name && 'expanded'
              }`}
              onClick={() => handleGroupClick(item.name)}
            >
              <ChevronRight
                fontSize={10}
                strokeWidth={2}
                color={Theme.palette.gray400.name}
              />
              {item.name}
            </button>
            {expandedGroupName === item.name && (
              <div className="group">
                {item.children.map((section) => (
                  <div key={section.name}>
                    <span className="section-name">{section.name}</span>
                    {section.children.map((item) => {
                      const Component = item.target ? Link : NextLink
                      return (
                        <Component
                          href={item.url || '/'}
                          target={item.target}
                          key={item.url}
                        >
                          <a
                            className={`section-item ${
                              pathname === item.url ? 'active' : ''
                            }`}
                          >
                            {item.name}
                          </a>
                        </Component>
                      )
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .mobile-menu {
          position: fixed;
          top: 60px;
          z-index: 1001;
          right: 0;
          left: 0;
          bottom: 0;
          display: block;
          margin: 0;
          width: 100%;
          /* height: 100vh; */
          -webkit-transition: height.25s ease;
          -moz-transition: height.25s ease;
          -o-transition: height.25s ease;
          transition: height.25s ease;
          will-change: height;
          overflow-y: scroll;
          overflow-x: hidden;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;

          backdrop-filter: saturate(180%) blur(40px);
          transition: box-shadow 1s ease;
          transition: backdrop-filter 1s ease;
        }
        .fadein {
          animation: fadeIn 200ms ease;
          animation-fill-mode: forwards;
          opacity: 0;
        }
        .menu-item {
          padding: 0 ${Theme.layout.pageMargin.name};
          height: 48px;
          width: 100%;
          display: flex;
          align-items: center;
          border: none;
          background: none;
          outline: none;
          /* border-bottom: 1px solid ${Theme.palette.gray200.name}; */
          text-transform: capitalize;
          color: ${Theme.palette.gray700.name};
          cursor: pointer;
        }
        .menu-item :global(svg) {
          transform: translateX(${Theme.layout.gapQuarterNegative.name});
          transition: transform 250ms ease;
        }
        .menu-item.expanded {
          border-bottom: none;
        }
        .menu-item.expanded :global(svg) {
          transform: rotate(90deg) translateY(${Theme.layout.gapQuarter.name});
        }
        .group {
          /* background: ${Theme.palette.gray100.name}; */
          padding: 1px ${Theme.layout.gap} ${Theme.layout.gap.name}
            calc(${Theme.layout.gap.name} * 1.5);
        }
        .section-name {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          color: ${Theme.palette.gray700.name};
          margin-top: ${Theme.layout.gap.name};
          margin-bottom: ${Theme.layout.gapHalf.name};
        }
        .section-item {
          padding: ${Theme.layout.gapQuarter.name} ${Theme.layout.gap.name};
          margin: 0 ${Theme.layout.gapQuarter.name};
          width: 100%;
          display: flex;
          align-items: center;
          border: none;
          background: none;
          outline: none;
          color: ${Theme.palette.gray600.name};
          border-left: 1px solid ${Theme.palette.gray200.name};
        }
        .active {
          color: ${Theme.palette.link.name};
          font-weight: 500;
        }
        @keyframes fadeIn {
          from {
            transform: translate3d(0, 0.375rem, 0);
            opacity: 0;
          }
          to {
            transform: translate3d(0, 0, 0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default MenuMobile
