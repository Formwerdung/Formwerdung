/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import Img from 'gatsby-image';
import { css } from 'emotion';
import Container from '../Container';
import { mq } from '../CaseCard';

const Hero = ({ props }) => (
  <section className={css(tw('relative'))}>
    <Container>
      <div className={css(tw('px-1'))}>
        <h1 className={css(tw('text-3xl leading-4 pt-8 sm:pt-10 xl:pt-12 text-white relative z-10 m-0'), {'text-shadow': '0 4px 4px rgba(0,0,0,0.5)'})}>
          Alles fürs Web
        </h1>
        <p className={css(tw('pb-1 text-white relative z-10 m-0'), {'text-shadow': '0 4px 4px rgba(0,0,0,0.5)', 'max-width': '350px', [mq[1]]: { 'max-width': '449px' } })}>
          Formwerdung gestaltet und entwickelt exklusiv für online.
          Wir sind auf <em>responsive Design</em> spezialisiert, das auch bei komplexen Interfaces keine Abstriche machen muss.
        </p>
      </div>
    </Container>
    <div className={css(tw('absolute pin-t w-full h-full'), { 'background-color': 'rgba(0, 0, 0, 0.6)' })}>
      <Img sizes={ props.sizes } position="absolute" outerWrapperClassName="hero__bg-container" className={'hero__bg-image'} />
    </div>
  </section>
);

export default Hero;