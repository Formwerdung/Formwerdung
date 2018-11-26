import React from 'react'
import styled from 'react-emotion'
import tw from 'tailwind.macro'

import Container from '../Container'
import { Nav, NavItem } from '../Nav'
import { borderTop } from '../../utils/style'
import { css } from 'emotion'

const Colophon = styled('footer')`
  ${tw`bg-white h-3x overflow-hidden`};
`

const ColophonWrapper = styled('div')`
  ${tw`md:flex md:justify-between px-1x`};
`

const ColophonCopyright = styled('div')`
  ${tw`leading-3x`};
`

export default () => (
  <Colophon className={css(borderTop)}>
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
