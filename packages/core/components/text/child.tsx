import React, { useMemo } from 'react'
import { NormalTypes } from '../utils/prop-types'
import {NapolkeIThemesPalette, Theme} from '../themes/presets'
import useScale from '../use-scale'

export interface Props {
  tag: keyof JSX.IntrinsicElements
  type?: NormalTypes
  className?: string
}

const defaultProps = {
  type: 'default' as NormalTypes,
  className: '',
}

const getTypeColor = (type: NormalTypes, palette: NapolkeIThemesPalette) => {
  const colors: { [key in NormalTypes]: string } = {
    default: 'inherit',
    secondary: palette.secondary.name,
    success: palette.success.name,
    warning: palette.warning.name,
    error: palette.error.name,
  }

  return colors[type] || colors.default
}

type NativeAttrs = Omit<React.DetailsHTMLAttributes<any>, keyof Props>
export type TextChildProps = Props & NativeAttrs

const TextChild: React.FC<React.PropsWithChildren<TextChildProps>> = ({
  children,
  tag,
  className,
  type,
  ...props
}: React.PropsWithChildren<TextChildProps> & typeof defaultProps) => {
  const Component = tag
  const { SCALES, getScaleProps } = useScale()
  const fontSize = getScaleProps('fs')
  const fontWeight = getScaleProps('fw')
  const mx = getScaleProps(['margin', 'marginLeft', 'marginRight', 'mx', 'ml', 'mr'])
  const my = getScaleProps(['margin', 'marginTop', 'marginBottom', 'my', 'mt', 'mb'])
  const px = getScaleProps(['padding', 'paddingLeft', 'paddingRight', 'pl', 'pr', 'px'])
  const py = getScaleProps(['padding', 'paddingTop', 'paddingBottom', 'pt', 'pb', 'py'])
  const color = useMemo(() => getTypeColor(type, Theme.palette), [type, Theme.palette])
  const classNames = useMemo<string>(() => {
    const keys = [
      { value: mx, className: 'mx' },
      { value: my, className: 'my' },
      { value: px, className: 'px' },
      { value: py, className: 'py' },
      { value: fontSize, className: 'font' },
      { value: fontWeight, className: 'font-weight' },
    ]
    const scaleClassNames = keys.reduce((pre, next) => {
      if (typeof next.value === 'undefined') return pre
      return `${pre} ${next.className}`
    }, '')
    return `${scaleClassNames} ${className}`.trim()
  }, [mx, my, px, py, fontSize, className])

  return (
    <Component className={classNames} {...props}>
      {children}
      <style jsx>{`
        ${tag} {
          color: ${color};
          width: ${SCALES.width(1, 'auto')};
          height: ${SCALES.height(1, 'auto')};
        }
        .font {
          font-size: ${SCALES.fs(1, 'inherit')};
          font-weight: ${fontWeight};
        }
        .mx {
          margin-left: ${SCALES.ml(0, 'revert')};
          margin-right: ${SCALES.mr(0, 'revert')};
        }
        .my {
          margin-top: ${SCALES.mt(0, 'revert')};
          margin-bottom: ${SCALES.mb(0, 'revert')};
        }
        .px {
          padding-left: ${SCALES.pl(0, 'revert')};
          padding-right: ${SCALES.pr(0, 'revert')};
        }
        .py {
          padding-top: ${SCALES.pt(0, 'revert')};
          padding-bottom: ${SCALES.pb(0, 'revert')};
        }
      `}</style>
    </Component>
  )
}

TextChild.defaultProps = defaultProps
TextChild.displayName = 'GeistTextChild'
export default TextChild
