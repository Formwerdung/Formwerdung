import React from 'react'
import styled from 'react-emotion'
import tw from 'tailwind.macro'

import Container from '../Container'
import { Nav, NavItem } from '../Nav'

const Colophon = styled('footer')`
  ${tw`bg-grey-lighter h-3 overflow-hidden`};
`

const ColophonWrapper = styled('div')`
  ${tw`md:flex md:justify-between px-1`};
`

const ColophonCopyright = styled('div')`
  ${tw`leading-3`};
`

export default () => (
  <Colophon>
    <Container>
      <ColophonWrapper>
        <ColophonCopyright>&copy; 2018 Formwerdung</ColophonCopyright>
        <div>
          <Nav>
            <NavItem to={'/impressum/'}>Impressum</NavItem>
          </Nav>
        </div>
      </ColophonWrapper>
    </Container>
  </Colophon>
)
