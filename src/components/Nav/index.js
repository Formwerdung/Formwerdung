import styled from 'astroturf'
import { Link } from 'gatsby'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import config from '../../../tailwind.config'

const AnchorLinkStyled = styled(AnchorLink)`
  @apply leading-3x text-black text-blue-dark;
`

const AnchorListItem = styled('li')`
  @apply h-full pl-1x my-auto;
`

export const AnchorItem = props => (
  <AnchorListItem>
    <AnchorLinkStyled href="#contact">{props.children}</AnchorLinkStyled>
  </AnchorListItem>
)

const NavListItem = styled('li')`
  @apply h-full px-1x;
`

const NavLink = styled(Link)`
  @apply leading-3x no-underline text-black text-blue-dark;
`

export const NavItem = ({ children, exact, to }) => (
  <NavListItem>
    <NavLink to={to} exact={exact}>
      {children}
    </NavLink>
  </NavListItem>
)

export const Nav = ({ children }) => (
  <nav
    css={`
      @apply h-full;
    `}
  >
    <ul
      css={`
        @apply list-none p-0 m-0 flex h-full;
      `}
    >
      {children}
    </ul>
  </nav>
)
