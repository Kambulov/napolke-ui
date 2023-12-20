import React, { useMemo } from 'react'
import NextLink from 'next/link'
import Metadata from 'lib/data'
import useLocale from 'lib/use-locale'
import { useConfigs } from 'lib/config-context'
import { Sides } from '../sidebar/side-item'
// import ChevronRightIcon from '@geist-ui/icons/chevronRight'
import { useRouter } from 'next/router'
import {Theme} from "../../../../core/components/themes/presets";

interface Props {
  expanded: boolean
}

const MenuMobile: React.FC<Props> = ({ expanded }) => {
  const { pathname } = useRouter()
  const { isRussian } = useConfigs()
  const { locale } = useLocale()
  const menuData = useMemo(() => Metadata[locale], [locale])
  const [expandedGroupName, setExpandedGroupName] = React.useState<string | null>(null)

  const handleGroupClick = (name: string) => {
    setExpandedGroupName(expandedGroupName === name ? null : name)
  }

  if (!expanded) return null

  return (
    <div className="mobile-menu">
      <div className="content">
        <NextLink href={`/${locale}`}>
          <a className={`menu-item fadein ${pathname === `/${locale}` ? 'active' : ''}`}>
            {isRussian ? 'Главная' : 'Home'}
          </a>
        </NextLink>

        {menuData.map((group, index) => (
          <div
            key={group.name}
            className="fadein"
            style={{ animationDelay: `${(index + 1) * 50}ms` }}>
            <button
              className={`menu-item ${expandedGroupName === group.name && 'expanded'}`}
              onClick={() => handleGroupClick(group.name)}>
              {/*<ChevronRightIcon*/}
              {/*  size="1rem"*/}
              {/*  strokeWidth={2}*/}
              {/*  color={theme.palette.accents_4}*/}
              {/*/>*/}
              {group.name}
            </button>
            {expandedGroupName === group.name && (
              <div className="group">
                {(group.children as Array<Sides>).map(section => (
                  <div key={section.name}>
                    <span className="section-name">{section.name}</span>
                    {(section.children as Array<Sides>).map(item => (
                      <NextLink href={item.url || '/'} key={item.url}>
                        <a
                          className={`section-item ${
                            pathname === item.url ? 'active' : ''
                          }`}>
                          {item.name}
                        </a>
                      </NextLink>
                    ))}
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
          top: var(--geist-page-nav-height);
          height: calc(100vh - var(--geist-page-nav-height));
          width: 100vw;
          overflow-y: auto;
          z-index: 999;
          box-sizing: border-box;
          background-color: ${Theme.palette.background.name};
          overflow-y: auto;
        }
        .fadein {
          animation: fadeIn 200ms ease;
          animation-fill-mode: forwards;
          opacity: 0;
        }
        .menu-item {
          padding: 0 ${Theme.layout.gapHalf.name};
          margin: 0 ${Theme.layout.gap.name};
          height: 48px;
          width: 100%;
          display: flex;
          align-items: center;
          border: none;
          background: none;
          outline: none;
          border-bottom: 1px solid ${Theme.palette.gray200.name};
          text-transform: capitalize;
          color: ${Theme.palette.gray500.name};
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
          background: ${Theme.palette.gray50.name};
          padding: 0 calc(${Theme.layout.gap.name} * 1.5) ${Theme.layout.gap.name};
          border-top: 1px solid ${Theme.palette.gray200.name};
        }
        .section-name {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          color: ${Theme.palette.gray500.name};
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
          color: ${Theme.palette.gray500.name};
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
