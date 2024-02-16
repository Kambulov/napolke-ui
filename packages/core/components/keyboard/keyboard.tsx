import React from 'react'
import useScale, { withScale } from '../use-scale'
import {Theme} from "../themes/presets";

interface Props {
  command?: boolean
  shift?: boolean
  option?: boolean
  ctrl?: boolean
  className?: string
}

const defaultProps = {
  command: false,
  shift: false,
  option: false,
  ctrl: false,
  className: '',
}

type NativeAttrs = Omit<React.KeygenHTMLAttributes<any>, keyof Props>
export type KeyboardProps = Props & NativeAttrs

const KeyboardComponent: React.FC<React.PropsWithChildren<KeyboardProps>> = ({
  command,
  shift,
  option,
  ctrl,
  children,
  className,
  ...props
}: React.PropsWithChildren<KeyboardProps> & typeof defaultProps) => {
  const { SCALES } = useScale()

  return (
    <kbd className={className} {...props}>
      {command && <span>⌘</span>}
      {shift && <span>⇧</span>}
      {option && <span>⌥</span>}
      {ctrl && <span>⌃</span>}
      {children && <span>{children}</span>}

      <style jsx>{`
        kbd {
          line-height: 2em;
          text-align: center;
          display: inline-block;
          color: ${Theme.palette.gray500.name};
          background-color: ${Theme.palette.gray50.name};
          font-family: ${Theme.font.sans};
          border-radius: ${Theme.layout.radius};
          border: 1px solid ${Theme.palette.gray200.name};
          font-size: ${SCALES.fs(0.875)};
          width: ${SCALES.width(1, 'fit-content')};
          height: ${SCALES.height(1, 'auto')};
          min-width: 2em;
          min-height: 2em;
          padding: ${SCALES.pt(0)} ${SCALES.pr(0.34)} ${SCALES.pb(0)} ${SCALES.pl(0.34)};
          margin: ${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)};
        }

        span {
          line-height: 2em;
          font-size: 1em;
          text-align: center;
        }

        span + span {
          margin-left: 0.3em;
        }
      `}</style>
    </kbd>
  )
}

KeyboardComponent.defaultProps = defaultProps
KeyboardComponent.displayName = 'NuiKeyboard'
const Keyboard = withScale(KeyboardComponent)
export default Keyboard
