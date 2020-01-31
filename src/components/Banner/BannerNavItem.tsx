/** @jsx jsx */
import React, { FunctionComponent } from 'react'
import { css, jsx } from '@emotion/core'
import { Link, GatsbyLinkProps } from 'gatsby'
import tw from 'tailwind.macro'

const BannerNavItem: FunctionComponent<GatsbyLinkProps<any>> = ({
  children,
  ...rest
}) => (
  <li>
    <Link
      css={tw`text-white hover:text-gray-400 leading-3x no-underline transition block mr-2x`}
      activeStyle={tw`text-gray-400`}
      {...rest}
    >
      {children}
    </Link>
  </li>
)

export default BannerNavItem
