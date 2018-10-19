import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import tw from 'tailwind.macro'

import Container from '../Container'
import { AnchorItem, NavItem, Nav } from '../Nav'
import logoSmall from './formwerdung-logo-small.svg'
import logoLarge from './formwerdung-logo-large.svg'

const Banner = styled('header')`
  ${tw`shadow w-full h-3 fixed pin-t z-20 bg-white`};
`
const BannerWrapper = styled('div')`
  ${tw`h-full flex justify-between px-1`};
`

const BannerLink = styled(Link)`
  ${tw`py-xs max-w-hack`};
`

const BannerLogoSmall = styled('img')`
  ${tw`h-full md:hidden block`};
`

const BannerLogoLarge = styled('img')`
  ${tw`h-full hidden md:block`};
`

const BannerNav = () => (
  <Nav>
    <NavItem to={'/angebot/'} border>
      Angebot
    </NavItem>
    <NavItem to={'/portfolio/'} border>
      Portfolio
    </NavItem>
    <AnchorItem to={'#contact'}>Kontakt</AnchorItem>
  </Nav>
)

export default () => (
  <Banner>
    <Container>
      <BannerWrapper>
        <BannerLink to={'/'}>
          <BannerLogoSmall src={logoSmall} alt={'The Formwerdung Logo'} />
          <BannerLogoLarge src={logoLarge} alt={'The Formwerdung Logo'} />
        </BannerLink>
        <BannerNav />
      </BannerWrapper>
    </Container>
  </Banner>
)
