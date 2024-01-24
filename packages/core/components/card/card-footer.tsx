import React from 'react'
import useScale, { withScale } from '../use-scale'
import useClasses from '../use-classes'
import {Theme} from "../themes/presets";

interface Props {
  disableAutoMargin?: boolean
  className?: string
}

const defaultProps = {
  disableAutoMargin: false,
  className: '',
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type CardFooterProps = Props & NativeAttrs

const CardFooterComponent: React.FC<React.PropsWithChildren<CardFooterProps>> = ({
  children,
  className,
  disableAutoMargin,
  ...props
}: CardFooterProps & typeof defaultProps) => {
  const { SCALES } = useScale()
  const classes = useClasses({ 'auto-margin': !disableAutoMargin }, className)

  return (
    <footer className={classes} {...props}>
      {children}
      <style jsx>{`
        footer {
          padding: ${SCALES.py(0.66)} ${SCALES.px(1.31)};
          display: flex;
          align-items: center;
          overflow: hidden;
          color: inherit;
          background-color: inherit;
          font-size: ${SCALES.fs(0.875)};
          border-top: 1px solid ${Theme.palette.border.name};
          border-bottom-left-radius: ${Theme.layout.radius.name};
          border-bottom-right-radius: ${Theme.layout.radius.name};
          min-height: ${SCALES.height(3.3)};
          width: ${SCALES.width(1, 'auto')};
          height: ${SCALES.height(1, 'auto')};
          margin: ${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)};
        }

        .auto-margin :global(*) {
          margin-top: 0;
          margin-bottom: 0;
          margin-right: ${Theme.layout.gapQuarter.name};
        }
      `}</style>
    </footer>
  )
}

CardFooterComponent.defaultProps = defaultProps
CardFooterComponent.displayName = 'NuiCardFooter'
const CardFooter = withScale(CardFooterComponent)
export default CardFooter
