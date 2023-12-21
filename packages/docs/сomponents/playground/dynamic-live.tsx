import React from 'react'
import { LivePreview, LiveProvider, LiveError } from 'react-live'
import makeCodeTheme from './code-theme'
import Editor from './editor'
import {Theme} from "../../../core/components/themes/presets";

export interface Props {
  code: string
  scope: {
    [key: string]: any
  }
}

const DynamicLive: React.FC<Props> = ({ code, scope }) => {
  const codeTheme = makeCodeTheme(Theme)
  return (
    <LiveProvider code={code} scope={scope} theme={codeTheme}>
      <div className="wrapper">
        <LivePreview />
        <LiveError className="live-error" />
      </div>
      <Editor code={code} />
      <style jsx>{`
        .wrapper {
          width: 100%;
          padding: ${Theme.layout.pageMargin.name};
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .wrapper > :global(div) {
          width: 100%;
          background-color: transparent;
        }
        .wrapper > :global(.live-error) {
          padding: 10px 12px 0 12px;
          margin-bottom: 0;
          border: 2px ${Theme.palette.error.name} dotted;
          border-radius: 10px;
          color: ${Theme.palette.errorLight.name};
          font-size: 13px;
        }
      `}</style>
    </LiveProvider>
  )
}

export default DynamicLive
