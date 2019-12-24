/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { ArrowRightCircle } from 'react-feather'

import config from '../../../tailwind.config'
import Container from '../Container'
import { Image, ImageContainer } from '../Images'
import { transition } from '../../utils/style'
import { Link } from 'gatsby'

const linkStyles = css`
  &:hover {
    p {
      color: ${config.theme.colors['blue']};
    }
    svg {
      color: ${config.theme.colors['blue']};
    }
  }
`

const DividerWrapper = styled('div')`
  ${tw`relative`};
`

const DividerTextWrapper = styled('div')`
  ${tw`flex justify-center content-center`};
`

const dividerTextString = tw`px-1x py-2x md:py-4x text-white text-right font-semibold relative z-10 m-0 text-shadow`

const dividerIconString = tw`h-8x md:h-12x py-3x md:py-5x stroke-current text-white relative z-10`

const Divider = ({ fluid, lineOne, lineTwo, route }) => (
  <Link to={route} css={linkStyles}>
    <DividerWrapper>
      <Container>
        <DividerTextWrapper>
          <p css={[dividerTextString, transition]}>
            {lineOne}
            <br />
            {lineTwo}
          </p>
          <ArrowRightCircle css={[dividerIconString, transition]} />
        </DividerTextWrapper>
      </Container>
      <ImageContainer>
        <Image fluid={fluid} />
      </ImageContainer>
    </DividerWrapper>
  </Link>
)

export default Divider
