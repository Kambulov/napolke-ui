import React, { useMemo } from 'react'
import {Theme} from "../themes/presets";

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
  className: '',
  fluid: false
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>
export type ContainerProps = Props & NativeAttrs

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

function Container({
  children,
  component,
  justify,
  align,
  fluid,
  className,
  ...props
}: React.PropsWithChildren<ContainerProps> & typeof defaultProps) {
  const Component = component

  const { justifyValue, alignValue } = useMemo(
    () => getFlexAlignment(justify, align),
    [justify, align]
  )

  const fluidWidth = !fluid && 'max-width: ' + Theme.layout.pageWidthWithMargin.value

  return (
     // @ts-ignore
    <Component className={`container ${className}`} {...props}>
      {children}
      <style jsx>{`
        .container {
          /* width: 100%; */
          ${fluidWidth};
          padding-left: 15px;
          padding-right: 15px;
          margin-right: auto;
          margin-left: auto;
          justify-content: ${justifyValue};
          align-items: ${alignValue};
        }
      `}</style>
    </Component>
  )
}

Container.defaultProps = defaultProps
Container.displayName = 'NuiContainer'
export default Container
