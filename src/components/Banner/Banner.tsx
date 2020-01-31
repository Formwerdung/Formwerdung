import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import Container from '../Container'
import { AnchorItem, NavItem, Nav } from '../Nav'
import logoSmall from './formwerdung-logo-small.svg'
import logoLarge from './formwerdung-logo-large.svg'
import { BannerLogo } from './BannerLogo'
import { BannerLogoSmall } from './BannerLogoSmall'
import BannerNavItem from './BannerNavItem'

const Banner = styled('header')`
  ${tw`w-full absolute top-0 z-20`};
`
const BannerWrapper = styled('div')`
  ${tw`h-full flex justify-between px-1x`};
`

export default () => (
  <Banner>
    <Container>
      <BannerWrapper>
        <Link to={'/'} css={tw`block my-1x bg-white shadow-lg p-px`}>
          <div css={tw`h-6x`}>
            <BannerLogoSmall />
          </div>
        </Link>
        <Nav>
          <BannerNavItem to="/angebot">Angebot</BannerNavItem>
          <BannerNavItem to="/portfolio">Portfolio</BannerNavItem>
          <BannerNavItem to="/blog">Blog</BannerNavItem>
          <li>
            <Link
              to="/kontakt"
              css={tw`text-black hover:text-blue no-underline transition block relative h-8x overflow-hidden shadow-2xl`}
            >
              <div css={tw`leading-3x bg-white px-1x shadow-2xl`}>Kontakt</div>
              <div
                css={tw`absolute left-0 w-0 h-0 shadow-2xl`}
                style={{
                  borderStyle: 'solid',
                  borderWidth: '0.75rem 43px 0 43px',
                  borderColor: 'white transparent transparent transparent',
                }}
              ></div>
            </Link>
          </li>
        </Nav>
      </BannerWrapper>
    </Container>
  </Banner>
)
