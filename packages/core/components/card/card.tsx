import React, { useMemo } from 'react'
import { CardTypes } from '../utils/prop-types'
import { getStyles } from './styles'
import CardFooter from './card-footer'
import CardContent from './card-content'
import Image from '../image'
import { hasChild, pickChild } from '../utils/collections'
import useScale, { withScale } from '../use-scale'
import useClasses from '../use-classes'
import {Theme} from "../themes/presets";

interface Props {
  hoverable?: boolean
  shadow?: boolean
  className?: string
  type?: CardTypes
}

const defaultProps = {
  type: 'default' as CardTypes,
  hoverable: false,
  shadow: false,
  className: '',
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type CardProps = Props & NativeAttrs

const CardComponent: React.FC<React.PropsWithChildren<CardProps>> = ({
  children,
  hoverable,
  className,
  shadow,
  type,
  ...props
}: CardProps & typeof defaultProps) => {
  const { SCALES } = useScale()
  const hoverShadow = useMemo(() => {
    if (shadow) return Theme.expressiveness.shadowMedium
    return hoverable ? Theme.expressiveness.shadowSmall : 'none'
  }, [hoverable, shadow, Theme.expressiveness])
  const { color, bgColor, borderColor } = useMemo(
    () => getStyles(type, Theme.palette, shadow),
    [type, Theme.palette, shadow],
  )

  const [withoutFooterChildren, footerChildren] = pickChild(children, CardFooter)
  const [withoutImageChildren, imageChildren] = pickChild(withoutFooterChildren, Image)
  const hasContent = hasChild(withoutImageChildren, CardContent)

  return (
    <div className={useClasses('card', className)} {...props}>
      {imageChildren}
      {hasContent ? (
        withoutImageChildren
      ) : (
        <CardContent>{withoutImageChildren}</CardContent>
      )}
      {footerChildren}
      <style jsx>{`
        .card {
          background: ${Theme.palette.background.name};
          transition: all 0.2s ease;
          border-radius: ${Theme.layout.radius.name};
          box-shadow: ${shadow ? Theme.expressiveness.shadowSmall : 'none'};
          box-sizing: border-box;
          color: ${color};
          background-color: ${bgColor};
          border: 1px solid ${borderColor};
          width: ${SCALES.width(1, 'auto')};
          height: ${SCALES.height(1, 'auto')};
          padding: ${SCALES.pt(0)} ${SCALES.pr(0)} ${SCALES.pb(0)} ${SCALES.pl(0)};
          margin: ${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)};
        }

        .card:hover {
          box-shadow: ${hoverShadow};
        }

        .card :global(img) {
          width: 100%;
        }

        .card :global(.image) {
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
      `}</style>
    </div>
  )
}

CardComponent.defaultProps = defaultProps
CardComponent.displayName = 'GeistCard'
const Card = withScale(CardComponent)
export default Card
