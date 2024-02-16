import React, {DetailedHTMLProps, HTMLAttributes} from 'react'
import { kebabCase, isString } from 'lodash'
import Anchor from '../Anchor'

export type HybridLinkProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

const HybridLinkHeading: React.FC<HybridLinkProps> = ({
  children,
  ...props
}) => {
  return (
    <h3
      id={`${isString(children) && kebabCase(children)}`}
      data-name={children}
      className="linked-heading"
    >
      <Anchor {...props}>{children}</Anchor>
    </h3>
  )
}

export default HybridLinkHeading
