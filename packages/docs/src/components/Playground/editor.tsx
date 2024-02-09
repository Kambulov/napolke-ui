import React, { useState } from 'react'
import { LiveEditor } from 'react-live'
import { useToasts, useClipboard, Card, Tooltip, Text } from '@napolke-ui'
import CopyIcon from '@napolke-ui/icons/CopyFile'
import RightIcon from '@napolke-ui/icons/ChevronRight'
import { Theme } from '@core/themes/presets'

interface Props {
  code: string
}

const Editor: React.FC<Props> = ({ code }) => {
  const { copy } = useClipboard()
  const [visible, setVisible] = useState(true)
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
    setToast({ text: 'Скопировано!' })
  }

  return (
    <div className="editor">
      <Card style={{ background: 'none' }}>
        <Card.Content onClick={clickHandler} px={0} py={0}>
          <div className="open-header">
            <div className="action">
              <span className="arrow">
                <RightIcon size={16} color="#FFFFFF" />
              </span>
              <Text style={{ color: '#FFFFFF' }}>
                {visible ? 'Скрыть код' : 'Показать код'}
              </Text>
            </div>
            <div className="action">
              {visible && (
                <Tooltip
                  onClick={copyHandler}
                  text="Скопировать код"
                  scale={1 / 2}
                >
                  <CopyIcon size={18} color="#FFFFFF" />
                </Tooltip>
              )}
            </div>
          </div>
        </Card.Content>
        {visible && <LiveEditor />}
      </Card>
      <style jsx>{`
        .open-header {
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 2.875rem;
          padding: 0 ${Theme.layout.gapHalf.name};
          background-color: rgb(54, 52, 80);
          border-radius: ${Theme.layout.radius.name};
          border-bottom-left-radius: ${visible ? 0 : Theme.layout.radius.name};
          border-bottom-right-radius: ${visible ? 0 : Theme.layout.radius.name};
        }

        .action {
          width: auto;
          display: flex;
          align-items: center;
          font-size: 0.8rem;
          cursor: pointer;
        }

        .arrow {
          transition: all 0.2s ease;
          transform: rotate(${visible ? 90 : 0}deg);
          display: inline-flex;
          align-items: center;
          margin-right: 0.5rem;
        }
      `}</style>
    </div>
  )
}

export default Editor
