/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { css } from 'emotion';
import Container from '../Container';

const OfferNavItem = props =>
  <li className={css(tw('my-auto'))}>
    <Link to={props.to}
          activeStyle={{
            color: '#080401',
            background: '#fffefc',
            position: 'relative',
            'z-index': '10',
            'box-shadow': '0 -2px 2px 0 rgba(0,0,0,0.10)',
            'text-shadow': 'none',
          }}
          exact={props.exact}
          className={css(tw('no-underline text-white hover:text-blue-lightest transition-color px-1 pt-1 p-1 rounded rounded-b-none block '), {'text-shadow': '0 4px 4px rgba(0,0,0,0.5)'})}>
      {props.children}
    </Link>
  </li>;

const OfferNav = ({ props }) =>
  <div className={css(tw('relative'))}>

    <nav className={css(tw('h-full relative z-10'))}>
      <Container>
      <ul className={css(tw('list-reset m-0 flex h-full justify-start pt-4 md:pt-8 px-1'))}>

        <OfferNavItem exact to={'/angebot/'}>Übersicht</OfferNavItem>
        <OfferNavItem to={'/angebot/klein/'}>Klein</OfferNavItem>
        <OfferNavItem to={'/angebot/gross/'}>Gross</OfferNavItem>
        <OfferNavItem to={'/angebot/hosting/'}>Hosting</OfferNavItem>

      </ul>
      </Container>
    </nav>
    <div className={css(tw('absolute pin-t w-full h-full shadow-inner'))}>
      <Img sizes={ props.sizes } position="absolute" outerWrapperClassName="hero__bg-container" className={'hero__bg-image'} />
    </div>
  </div>;

export default OfferNav;