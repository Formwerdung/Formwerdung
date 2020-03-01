import styled from 'astroturf'
import { Link } from 'gatsby'
import React from 'react'
import { ArrowRightCircle } from 'react-feather'

import config from '../../../tailwind.config'
import {} from '../../utils/style'
import Container from '../Container'
import { Image, ImageContainer } from '../Images'

const DividerWrapper = styled('div')`
  @apply relative;
`

const DividerTextWrapper = styled('div')`
  @apply flex justify-center content-center;
`

const dividerTextString = `@apply px-1x py-2x py-4x text-white text-right font-semibold relative z-1 m-0 text-shadow`

const dividerIconString = `@apply h-8x h-12x py-3x py-5x stroke-current text-white relative z-1`

const Divider = ({ fluid, lineOne, lineTwo, route }) => {
  return (
    <Link to={route}>
      <DividerWrapper>
        <Container>
          <DividerTextWrapper>
            <p css={[dividerTextString]}>
              {lineOne}
              <br />
              {lineTwo}
            </p>
            <ArrowRightCircle css={[dividerIconString]} />
          </DividerTextWrapper>
        </Container>
        <ImageContainer>
          <Image fluid={fluid} />
        </ImageContainer>
      </DividerWrapper>
    </Link>
  )
}

export default Divider
