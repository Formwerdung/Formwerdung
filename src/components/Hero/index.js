import React from 'react'
import { css } from 'emotion'
import tw from 'tailwind.macro'

import Container from '../Container'
import { textShadow } from '../../utils/style'
import { Image, ImageContainer, ImageContentWrapper } from '../Images'

export const heroTitle = tw`text-3xl leading-4x pt-8x sm:pt-10x xl:pt-12x text-white text-shadow relative z-10 m-0`

export const HeroTitle = ({ children }) => (
  <h1 className={css(heroTitle, textShadow)}>{children}</h1>
)

const Hero = ({ fluid }) => (
  <section className={css(tw`relative`)}>
    <Container>
      <ImageContentWrapper>
        <HeroTitle>Alles fürs Web</HeroTitle>
        <p
          className={css(
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

export default Hero
