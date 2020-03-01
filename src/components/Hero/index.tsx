import { css } from 'astroturf'
import React, { FunctionComponent } from 'react'

import { GatsbyImageSharpFluid_WithWebpFragment } from '../../../graphql-types'
import Container from '../Container'
import { Image, ImageContainer, ImageContentWrapper } from '../Images'
import { FluidObject } from 'gatsby-image'

interface Props {
  fluid: FluidObject
}

export const heroTitle = css`
  @apply text-3xl leading-4x pt-8x pt-10x pt-12x text-white relative z-1 m-0;
`

export const HeroTitle = ({ children }) => <h1>{children}</h1>

export const Hero: FunctionComponent<Props> = ({ fluid }) => (
  <section
    css={css`
      @apply relative h-screen;
    `}
  >
    <Container>
      <ImageContentWrapper>
        <HeroTitle>Alles fürs Web</HeroTitle>
        <p
          css={css`
            @apply pb-1x text-white relative z-1 m-0 max-w-hero max-w-hero-md;
          `}
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
