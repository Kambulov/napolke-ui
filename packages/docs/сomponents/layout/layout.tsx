import React from 'react'
import PageHeader from './header'
import Sidebar from './sidebar'
import PoweredBy from './powered-by'
import {Theme} from "../../../core/components/themes/presets";

export interface Meta {
  title: string
}

export interface LayoutProps {
  meta: Meta
  getStaticProps?: any
}

export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = React.memo(
  ({ children, meta }) => {

    return (
      <div className="layout">
        <PageHeader meta={meta} />
        <aside className="sidebar">
          <div className="content">
            <Sidebar />
          </div>
        </aside>
        <main className="main">
          <div>{children}</div>
          <PoweredBy />
        </main>
        <style jsx>{`
          :global(.layout h3) {
            margin-top: 40px;
          }
          :global(.layout h4) {
            margin-top: 25px;
          }
          :global(.layout ol) {
            padding-left: 40px;
            margin: 25px auto;
            transform: scale(0.95);
          }
          .layout {
            min-height: calc(100vh - 108px);
            max-width: ${Theme.layout.pageWidthWithMargin.name};
            margin: 0 auto;
            padding: 0 ${Theme.layout.gap.name};
            display: flex;
            box-sizing: border-box;
          }
          .sidebar {
            flex-grow: 1;
          }
          .sidebar > .content {
            height: calc(100% - 2rem - 96px + var(--nui-page-nav-height));
            position: fixed;
            top: 96px;
            bottom: 2rem;

            width: 200px;
            margin-right: 20px;
            -webkit-overflow-scrolling: touch;
            -webkit-flex-shrink: 0;
            z-index: 100;
          }
          .main {
            display: flex;
            max-width: calc(100% - 220px);
            flex-direction: column;
            padding-left: 20px;
            padding-top: 25px;
            flex: 0 0 100%;
            padding-bottom: 50px;
          }
          @media only screen and (max-width: ${Theme.layout.breakpointMobile.name}) {
            .layout {
              max-width: 100%;
              width: 100%;
              padding: 20px 1rem;
            }
            .sidebar {
              display: none;
            }
            .main {
              width: 90vw;
              max-width: 90vw;
              padding: 0;
            }
          }
        `}</style>
      </div>
    )
  },
)

export default Layout
