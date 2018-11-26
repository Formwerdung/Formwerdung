import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'
import styled from 'react-emotion'
import tw from 'tailwind.macro'
import { ArrowRightCircle } from 'react-feather'

import config from '../../../tailwind'
import Container from '../Container'
import { Image, ImageContainer } from '../Images'

const linkStyles = css`
  &:hover {
    p {
      color: ${config.colors['blue']};
    }
    svg {
      color: ${config.colors['blue']};
    }
  }
`

const DividerWrapper = styled('div')`
  ${tw`relative`};
`

const DividerTextWrapper = styled('div')`
  ${tw`flex justify-center content-center`};
`

const DividerText = styled('p')`
  ${tw`px-1x py-2x md:py-4x text-white text-right font-semibold relative z-10 m-0 transition-all text-shadow`};
`

const DividerIcon = styled(ArrowRightCircle)`
  ${tw`h-8x md:h-12x py-3x md:py-5x stroke-current text-white relative z-10 transition-all`};
`

const Divider = ({ fluid, lineOne, lineTwo, route }) => (
  <Link to={route} className={linkStyles}>
    <DividerWrapper>
      <Container>
        <DividerTextWrapper>
          <DividerText>
            {lineOne}
            <br />
            {lineTwo}
          </DividerText>
          <DividerIcon />
        </DividerTextWrapper>
      </Container>
      <ImageContainer>
        <Image fluid={fluid} />
      </ImageContainer>
    </DividerWrapper>
  </Link>
)

export default Divider
