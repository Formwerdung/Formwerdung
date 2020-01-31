/** @jsx jsx */
import React, { FunctionComponent } from 'react'
import { css, jsx } from '@emotion/core'
import tw from 'tailwind.macro'

import { GatsbyImageSharpFluid_WithWebpFragment } from '../../../graphql-types'
import Container from '../Container'
import { textShadow } from '../../utils/style'
import { Image, ImageContainer, ImageContentWrapper } from '../Images'

interface Props {
  fluid: GatsbyImageSharpFluid_WithWebpFragment
}

export const heroTitle = tw`text-3xl leading-4x pt-8x sm:pt-10x xl:pt-12x text-white text-shadow relative z-10 m-0`

export const HeroTitle = ({ children }) => (
  <h1 css={css(heroTitle, textShadow)}>{children}</h1>
)

export const Hero: FunctionComponent<Props> = ({ fluid }) => (
  <section css={tw`relative`}>
    <Container>
      <ImageContentWrapper>
        <HeroTitle>Alles fürs Web</HeroTitle>
        <p
          css={css(
            tw`pb-1x text-white text-shadow relative z-10 m-0 max-w-hero md:max-w-hero-md`,
            textShadow
          )}
        >
          Formwerdung gestaltet und entwickelt exklusiv Webseiten und –apps. Wir
          sind auf <em>responsive Design</em> spezialisiert, das auch bei
          komplexen Interfaces keine Abstriche machen muss.
        </p>
      </ImageContentWrapper>
    </Container>
    <ImageContainer>
      <Image fluid={fluid} />
    </ImageContainer>
  </section>
)
