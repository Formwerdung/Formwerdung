/** @jsx jsx */
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'gatsby'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import config from '../../../tailwind.config'
import { transition } from '../../utils/style'

const AnchorLinkStyled = styled(AnchorLink)`
  ${tw`leading-3x text-black hover:text-blue-dark`};
`

const AnchorListItem = styled('li')`
  ${tw`h-full pl-1x my-auto`};
`

export const AnchorItem = props => (
  <AnchorListItem>
    <AnchorLinkStyled css={transition} href="#contact">
      {props.children}
    </AnchorLinkStyled>
  </AnchorListItem>
)

const navItemBorder = tw`border-grey-light border border-l-0 border-t-0 border-b-0 border-solid`

const NavListItem = styled('li')`
  ${tw`h-full px-1x`};
`

const NavLink = styled(Link)`
  ${tw`leading-3x no-underline text-black hover:text-blue-dark`};
`

export const NavItem = ({ border, children, exact, to }) => (
  <NavListItem css={border ? navItemBorder : {}}>
    <NavLink
      css={css(transition)}
      to={to}
      activeStyle={{
        color: config.theme.colors['blue-dark'],
      }}
      exact={exact}
    >
      {children}
    </NavLink>
  </NavListItem>
)

export const Nav = ({ children }) => (
  <nav css={tw`h-full`}>
    <ul css={tw`list-none p-0 m-0 flex h-full`}>{children}</ul>
  </nav>
)
