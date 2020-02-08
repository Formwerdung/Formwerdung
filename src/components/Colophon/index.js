import { jsx } from '@emotion/core'
import React from 'react'
import { css } from '@emotion/core'
import styled from 'astroturf'

import Container from '../Container'
import { Nav, NavItem } from '../Nav'
import { borderTop } from '../../utils/style'

const Colophon = styled('footer')`
  @apply bg-white h-3x overflow-hidden;
`

const ColophonWrapper = styled('div')`
  @apply flex justify-between px-1x;
`

const ColophonCopyright = styled('div')`
  @apply leading-3x;
`

export default () => (
  <Colophon css={borderTop}>
    <Container>
      <ColophonWrapper>
        <ColophonCopyright>&copy; 2019 Formwerdung</ColophonCopyright>
        <div>
          <Nav>
            <NavItem to={'/impressum/'}>Impressum</NavItem>
          </Nav>
        </div>
      </ColophonWrapper>
    </Container>
  </Colophon>
)
