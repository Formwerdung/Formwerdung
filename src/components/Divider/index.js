import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'
import styled from 'react-emotion'
import tw from 'tailwind.macro'
import { ArrowRightCircle } from 'react-feather'

import config from '../../../tailwind'
import Container, { ImageContainer, Image } from '../Container'

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
  ${tw`px-1 py-2 md:py-4 text-white text-right font-semibold relative z-10 m-0 transition-all text-shadow`};
`

const DividerIcon = styled(ArrowRightCircle)`
  ${tw`h-8 md:h-12 py-3 md:py-5 stroke-current text-white relative z-10 transition-all`};
`

const Divider = ({ image, lineOne, lineTwo, route }) => (
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
        <Image sizes={image.sizes} />
      </ImageContainer>
    </DividerWrapper>
  </Link>
)

export default Divider
