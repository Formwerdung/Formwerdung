import React, { FunctionComponent } from 'react'

import { Stack } from '../'
import { Link, GatsbyLinkProps } from 'gatsby'

export const Nav: FunctionComponent = ({ children }) => {
  return (
    <Stack component="ul" orientation="horizontal" size="small">
      {children}
    </Stack>
  )
}

export const NavItem: FunctionComponent<GatsbyLinkProps<any>> = ({
  children,
  ...rest
}) => {
  return (
    <li
      css={`
        @apply list-none;
      `}
    >
      <Link
        css={`
          @apply text-blue-100 underline duration-150 ease-in-out;
        `}
        activeClassName={`no-underline`}
        {...(rest as any)}
      >
        {children}
      </Link>
    </li>
  )
}
