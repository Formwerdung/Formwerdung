import React, { FunctionComponent } from 'react'

import { Link, GatsbyLinkProps } from 'gatsby'
import { css } from 'astroturf'

const BannerNavItem: FunctionComponent<GatsbyLinkProps<any>> = ({
  children,
  ...rest
}) => (
  <li>
    <Link
      css={css`
        @apply text-white text-gray-400 leading-3x no-underline transition block mr-2x;
      `}
      activeClassName={`text-gray-400`}
      {...rest}
    >
      {children}
    </Link>
  </li>
)

export default BannerNavItem
