import React, { useMemo } from 'react'
import { DividerAlign, SnippetTypes } from '../utils/prop-types'
import {NapolkeIThemesPalette, Theme} from '../themes/presets'
import useScale, { withScale } from '../use-scale'
import useClasses from '../use-classes'

export type DividerTypes = SnippetTypes

interface Props {
  type?: DividerTypes
  align?: DividerAlign
  className?: string
}

const defaultProps = {
  align: 'center' as DividerAlign,
  type: 'default' as DividerTypes,
  className: '',
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type DividerProps = Props & NativeAttrs

const getColor = (type: DividerTypes, palette: NapolkeIThemesPalette) => {
  const colors: { [key in DividerTypes]: string } = {
    default: palette.border.name,
    lite: palette.gray50.name,
    success: palette.successLight.name,
    warning: palette.warning.name,
    error: palette.errorLight.name,
    secondary: palette.secondary.name,
    dark: palette.black.name,
  }
  return colors[type]
}

const DividerComponent: React.FC<React.PropsWithChildren<DividerProps>> = ({
  type,
  align,
  children,
  className,
  ...props
}: React.PropsWithChildren<DividerProps> & typeof defaultProps) => {
  const { SCALES } = useScale()
  const classes = useClasses('divider', className)
  const color = useMemo(() => getColor(type, Theme.palette), [type, Theme.palette])
  const alignClassName = useMemo(() => {
    if (!align || align === 'center') return ''
    if (align === 'left' || align === 'start') return 'start'
    return 'end'
  }, [align])
  const alignClasses = useClasses('text', alignClassName)
  const textColor = type === 'default' ? Theme.palette.black.name : color

  return (
    <div role="separator" className={classes} {...props}>
      {children && <span className={alignClasses}>{children}</span>}
      <style jsx>{`
        .divider {
          max-width: 100%;
          background-color: ${color};
          position: relative;
          font-size: ${SCALES.fs(1)};
          width: ${SCALES.width(1, 'auto')};
          height: ${SCALES.height(0.0625)};
          padding: ${SCALES.pt(0)} ${SCALES.pr(0)} ${SCALES.pb(0)} ${SCALES.pl(0)};
          margin: ${SCALES.mt(0.5)} ${SCALES.mr(0)} ${SCALES.mb(0.5)} ${SCALES.ml(0)};
        }

        .text {
          position: absolute;
          left: 50%;
          top: 50%;
          min-height: 100%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          transform: translate(-50%, -50%);
          padding: 0 0.75em;
          font-size: inherit;
          font-weight: bold;
          text-transform: capitalize;
          background-color: ${Theme.palette.background.name};
          color: ${textColor};
          z-index: 10;
        }

        .text.start {
          transform: translateY(-50%);
          left: 7%;
        }

        .text.end {
          transform: translateY(-50%);
          left: auto;
          right: 7%;
        }
      `}</style>
    </div>
  )
}

DividerComponent.defaultProps = defaultProps
DividerComponent.displayName = 'GeistDivider'
const Divider = withScale(DividerComponent)
export default Divider