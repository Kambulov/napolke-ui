import React, { useState } from 'react'
import { LiveEditor } from 'react-live'
import { useConfigs } from 'lib/config-context'
import { useToasts, useClipboard } from '@napolke-ui'
import CopyIcon from '@napolke-ui/icons/Coins'
import RightIcon from '@napolke-ui/icons/Coins'
import {Theme} from "../../../core/components/themes/presets";

interface Props {
  code: string
}

const Editor: React.FC<Props> = ({ code }) => {
  const { copy } = useClipboard()
  const { isRussian } = useConfigs()
  const [visible, setVisible] = useState(false)
  const { setToast } = useToasts()
  const clickHandler = (event: React.MouseEvent) => {
    event.stopPropagation()
    event.preventDefault()
    setVisible(!visible)
  }

  const copyHandler = (event: React.MouseEvent) => {
    event.stopPropagation()
    event.preventDefault()
    copy(code)
    setToast({ text: isRussian ? 'te' : 'code copied.' })
  }

  return (
    <div className="editor">
      <details open={visible}>
        <summary onClick={clickHandler}>
          <div className="summary-safari">
            <div className="action">
              <span className="arrow">
                <RightIcon size={16} />
              </span>
              <span>{isRussian ? 'Редактор кода' : 'Code Editor'}</span>
            </div>
            <div className="action">
              {visible && (
                <span
                  className="copy"
                  onClick={copyHandler}
                  title={isRussian ? 'Копировать' : 'Copy Code'}>
                  <CopyIcon size={18} />
                </span>
              )}
            </div>
          </div>
        </summary>
        <div className="area">
          <LiveEditor />
        </div>
      </details>

      <style jsx>{`
        .editor {
          border-bottom-left-radius: ${Theme.layout.radius.name};
          border-bottom-right-radius: ${Theme.layout.radius.name};
        }

        details {
          transition: all 0.2s ease;
          overflow: hidden;
          border-bottom-left-radius: ${Theme.layout.radius.name};
          border-bottom-right-radius: ${Theme.layout.radius.name};
        }

        details summary::-webkit-details-marker {
          display: none;
        }

        summary {
          box-sizing: border-box;
          border-top: 1px solid ${Theme.palette.gray200.name};
          color: ${Theme.palette.gray500.name};
          width: 100%;
          list-style: none;
          user-select: none;
          outline: none;
        }

        .summary-safari {
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 2.875rem;
          padding: 0 ${Theme.layout.gap.name};
        }

        summary :global(svg) {
          cursor: pointer;
        }

        .action {
          width: auto;
          display: flex;
          align-items: center;
          font-size: 0.8rem;
        }

        .area {
          position: relative;
          box-sizing: border-box;
          white-space: pre;
          font-family: ${Theme.font.mono};
          color: ${Theme.palette.black.name};
          background-color: ${Theme.palette.background.name};
          font-size: 1em;
          overflow: hidden;
          border-top: 1px solid ${Theme.palette.gray200.name};
          padding: ${Theme.layout.gapHalf.name};
        }

        .arrow {
          transition: all 0.2s ease;
          transform: rotate(${visible ? 90 : 0}deg);
          display: inline-flex;
          align-items: center;
          width: 1rem;
          height: 1rem;
          margin-right: 0.5rem;
        }

        .copy {
          display: inline-flex;
          align-items: center;
          color: ${Theme.palette.gray500.name};
          transition: color 0.2s ease;
        }

        .copy:hover {
          color: ${Theme.palette.gray700.name};
        }
      `}</style>
    </div>
  )
}

export default Editor
