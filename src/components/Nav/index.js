import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'gatsby'
import { css } from 'emotion'
import styled from 'react-emotion'
import tw from 'tailwind.macro'
import config from '../../../tailwind'

const AnchorLinkStyled = styled(AnchorLink)`
  ${tw`leading-3 text-black hover:text-blue-dark transition-color`};
`

const AnchorListItem = styled('li')`
  ${tw`h-full pl-1 my-auto`};
`

export const AnchorItem = props => (
  <AnchorListItem>
    <AnchorLinkStyled href="#contact">{props.children}</AnchorLinkStyled>
  </AnchorListItem>
)

const NavListItem = styled('li')`
  ${tw`h-full px-1 border-solid border-grey-light border border-l-0 border-t-0 border-b-0`};
`

const NavLink = styled(Link)`
  ${tw`leading-3 no-underline text-black hover:text-blue-dark transition-color`};
`

export const NavItem = props => (
  <NavListItem>
    <NavLink
      to={props.to}
      activeStyle={{
        color: config.colors['blue-dark'],
      }}
      exact={props.exact}
    >
      {props.children}
    </NavLink>
  </NavListItem>
)

export const Nav = ({ children }) => (
  <nav className={css(tw`h-full`)}>
    <ul className={css(tw`list-reset m-0 flex h-full`)}>{children}</ul>
  </nav>
)
