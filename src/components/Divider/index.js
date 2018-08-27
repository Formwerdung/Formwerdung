/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import Img from 'gatsby-image';
import Container from '../Container';
import { Link } from 'gatsby';
import { css } from 'emotion';
import { ArrowRightCircle } from 'react-feather';
import config from '../../../tailwind';

const Divider = ({ image, lineOne, lineTwo, route }) =>
  <Link to={ route }
        className={css({
          ':hover': {
            'p': {
              'color': `${config.colors['blue']}`,
            },
            'svg': {
              'color': `${config.colors['blue']}`,
            },
          },
        })}>
    <div className={css(tw('relative'))}>
      <Container>
        <div className={css(tw('flex justify-center content-center'))}>
          <p className={css(tw('px-1 py-2 md:py-4 text-white text-right font-semibold relative z-10 m-0 transition-all'), {'text-shadow': '0 4px 4px rgba(0,0,0,0.5)'})}>
            { lineOne }
            <br />
            { lineTwo }
          </p>
          <ArrowRightCircle className={css(tw('h-8 md:h-12 py-3 md:py-5 stroke-current text-white relative z-10 transition-all'))} />
        </div>
      </Container>
      <div className={css(tw('absolute pin-t w-full h-full'), { 'background-color': 'rgba(0, 0, 0, 0.6)' })}>
        <Img sizes={ image.sizes } position="absolute" outerWrapperClassName="hero__bg-container" className={'hero__bg-image'} />
      </div>
    </div>
  </Link>;

export default Divider;