import React, { useMemo } from 'react'
import { Theme } from '../themes/presets'

type Justify = 'start' | 'end' | 'center' | 'space-around' | 'space-between'
type Align = 'top' | 'middle' | 'bottom'

interface Props {
  gap?: number
  justify?: Justify
  align?: Align
  component?: keyof JSX.IntrinsicElements
  className?: string
}

const defaultProps = {
  gap: 0,
  justify: 'start' as Justify,
  align: 'top' as Align,
  component: 'div' as keyof JSX.IntrinsicElements,
  className: ''
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>
export type RowProps = Props & NativeAttrs

const getFlexAlignment = (justify: Justify, align: Align) => {
  const flexJustifyMap: { [key in Justify]?: string } = {
    end: 'flex-end',
    center: 'center',
    'space-around': 'space-around',
    'space-between': 'space-between'
  }
  const flexAlignMap: { [key in Align]?: string } = {
    middle: 'center',
    bottom: 'flex-end'
  }
  return {
    justifyValue: flexJustifyMap[justify] || 'normal',
    alignValue: flexAlignMap[align] || 'normal'
  }
}

function Row({
  children,
  component,
  gap,
  justify,
  align,
  className,
  ...props
}: React.PropsWithChildren<RowProps> & typeof defaultProps) {
  const Component = component

  const { justifyValue, alignValue } = useMemo(
    () => getFlexAlignment(justify, align),
    [justify, align]
  )

  return (
    <
      // @ts-ignore
      Component className={`row ${className}`} {...props}>
      {children}
      <style jsx>{`
        .row {
          display: flex;
          position: relative;
          box-sizing: border-box;
          margin-left: calc(${gap} * ${Theme.layout.gap.name} / 2);
          margin-right: calc(${gap} * ${Theme.layout.gap.name} / 2);
          --row-gap: calc(${gap} * ${Theme.layout.gap.name});
          justify-content: ${justifyValue};
          align-items: ${alignValue};
        }
      `}</style>
    </Component>
  )
}

Row.defaultProps = defaultProps
Row.displayName = 'NuiRow'
export default Row
