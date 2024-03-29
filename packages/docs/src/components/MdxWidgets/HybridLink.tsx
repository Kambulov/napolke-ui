import React from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { Link, LinkProps } from '@napolke-ui'
import { useRouter } from 'next/router'

export type HybridLinkProps =  NextLinkProps & LinkProps

const HybridLink: React.FC<HybridLinkProps> = ({
  href = '#',
  children,
  ...props
}) => {
  const isRelativeUrl = !/^([a-z0-9]*:|.{0})\/\/.*$/gim.test(href)
  const { pathname } = useRouter()
  const isHomePage = pathname.includes('guide/getting-started')

  if (isRelativeUrl) {
    return (
      <NextLink href={href} passHref>
        <Link color block {...props}>
          {children}
        </Link>
      </NextLink>
    )
  }

  return (
    <Link
      href={href}
      target="_blank"
      color
      icon={!isHomePage}
      rel="noreferrer nofollow"
      {...props}
    >
      {children}
    </Link>
  )
}

export default HybridLink
