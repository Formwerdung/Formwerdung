import React from 'react'
import { css } from 'emotion'
import tw from 'tailwind.macro'

import Container, { Image, ImageContainer } from '../Container'
import { textShadow } from '../../utils/style'

export const heroTitle = tw`text-3xl leading-4 pt-8 sm:pt-10 xl:pt-12 text-white text-shadow relative z-10 m-0`

export const HeroTitle = ({ children }) => (
  <h1 className={css(heroTitle, textShadow)}>{children}</h1>
)

const Hero = ({ props }) => (
  <section className={css(tw`relative`)}>
    <Container>
      <div className={css(tw`px-1`)}>
        <HeroTitle>Alles fürs Web</HeroTitle>
        <p
          className={css(
            tw`pb-1 text-white text-shadow relative z-10 m-0 max-w-hero md:max-w-hero-md`
          )}
        >
          Formwerdung gestaltet und entwickelt exklusiv für das World Wide Web.
          Wir sind auf <em>responsive Design</em> spezialisiert, das auch bei
          komplexen Interfaces keine Abstriche machen muss.
        </p>
      </div>
    </Container>
    <ImageContainer>
      <Image sizes={props.sizes} />
    </ImageContainer>
  </section>
)

export default Hero
