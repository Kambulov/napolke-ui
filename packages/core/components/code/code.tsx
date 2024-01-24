import React, { useMemo } from 'react'
import useScale, { withScale } from '../use-scale'
import { addColorAlpha } from '../utils/color'
import {Theme} from "../themes/presets";

interface Props {
  block?: boolean
  className?: string
  name?: string
  classic?: boolean
}

const defaultProps = {
  block: false,
  className: '',
  name: '',
  classic: false,
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type CodeProps = Props & NativeAttrs

const CodeComponent: React.FC<React.PropsWithChildren<CodeProps>> = ({
  children,
  block,
  className,
  name,
  classic,
  ...props
}: React.PropsWithChildren<CodeProps> & typeof defaultProps) => {
  const { SCALES } = useScale()
  const { background, border } = useMemo(() => {
    if (!classic)
      return {
        border: Theme.palette.gray50.name,
        background: addColorAlpha(Theme.palette.gray50.value, 0.75),
      }
    return {
      border: Theme.palette.gray200.name,
      background: Theme.palette.background.name,
    }
  }, [classic, Theme.palette])

  if (!block) return <code {...props}>{children}</code>

  return (
    <div className="pre">
      {name && (
        <header>
          <div className="name">{name}</div>
        </header>
      )}
      <pre className={className} {...props}>
        {children}
      </pre>
      <style jsx>{`
        .pre {
          max-width: 100%;
          border: 1px solid ${border};
          font-size: ${SCALES.fs(0.875)};
          width: ${SCALES.width(1, 'initial')};
          height: ${SCALES.height(1, 'auto')};
          margin: ${SCALES.mt(1.3)} ${SCALES.mr(0)} ${SCALES.mb(1.3)} ${SCALES.ml(0)};
          border-radius: ${Theme.layout.radius.name};
          background-color: ${background};
        }
        pre {
          max-width: 100%;
          font-size: inherit;
          border: none;
          margin: 0;
          line-height: 1.5em;
          padding: ${SCALES.pt(1.1)} ${SCALES.pr(1)} ${SCALES.pb(1.1)} ${SCALES.pl(1)};
        }
        .dark {
          color: white;
          background: black;
        }
        .dark code {
          color: white;
        }
        header {
          height: auto;
          width: 100%;
          display: flex;
          justify-content: space-between;
          border-radius: ${Theme.layout.radius.name};
          background-color: transparent;
        }
        .name {
          border: 1px solid ${Theme.palette.gray200.name};
          background-color: ${Theme.palette.gray200.name};
          color: ${Theme.palette.gray500.name};
          height: auto;
          line-height: 1.35em;
          display: inline-flex;
          align-items: center;
          font-size: ${SCALES.fs(0.8125)};
          padding: ${SCALES.fs(0.32)} ${SCALES.fs(0.5)} ${SCALES.fs(0.32)}
            ${SCALES.fs(0.5)};
          width: auto;
          border-top-left-radius: calc(${Theme.layout.radius.name} - 1px);
          border-bottom-right-radius: ${Theme.layout.radius.name};
        }
      `}</style>
    </div>
  )
}

CodeComponent.defaultProps = defaultProps
CodeComponent.displayName = 'NuiCode'
const Code = withScale(CodeComponent)
export default Code
