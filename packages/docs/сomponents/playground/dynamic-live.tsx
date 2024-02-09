import React from 'react'
import { LivePreview, LiveProvider, LiveError } from 'react-live'
import { useTheme, Tabs, Card } from '@napolke-ui'
import { addColorAlpha } from '@core/utils/color'
import makeCodeTheme from './code-theme'
import Editor from './editor'
import { Theme } from '@core/themes/presets'

export interface Props {
  code: string
  scope: {
    [key: string]: unknown
  }
}

const DynamicLive: React.FC<Props> = ({ code, scope }) => {
  const codeTheme = makeCodeTheme(Theme)

  return (
    <LiveProvider code={code} scope={scope} theme={codeTheme}>
      <Tabs initialValue="1" hideDivider hideBorder>
        <Tabs.Item label="Просмотр " value="1">
          <Card style={{ background: 'none' }}>
            <div className="wrapper">
              <LivePreview />
              <LiveError className="live-error" />
            </div>
          </Card>
        </Tabs.Item>
        <Tabs.Item label="Код </>" value="2">
          <Card style={{ background: 'none' }} mb={1}>
            <div className="wrapper">
              <LivePreview />
              <LiveError className="live-error" />
            </div>
          </Card>
          <Editor code={code} />
        </Tabs.Item>
      </Tabs>
      <style jsx>{`
        .wrapper {
          width: 100%;
          /* padding: ${Theme.layout.pageMargin.name}; */
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        .wrapper > :global(div) {
          width: 100%;
          background-color: transparent;
        }

        .wrapper > :global(.live-error) {
          margin-top: 0;
          margin-bottom: 0;
          border: 2px ${Theme.palette.error.name} dotted;
          border-radius: ${Theme.layout.radius.name};
          color: ${Theme.palette.error.name};
          font-size: 12px;
          background-color: ${addColorAlpha(Theme.palette.gray700.value, 0.1)};
        }
      `}</style>
    </LiveProvider>
  )
}

export default DynamicLive
