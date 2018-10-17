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

const offerNavItemStyle = {
  'text-shadow': '0 4px 4px rgba(0,0,0,0.5)',
  'text-overflow': 'ellipsis',
  'white-space': 'nowrap',
  'overflow': 'hidden',
};

const OfferNavItem = props =>
  <li className={css(tw('my-auto flex-shrink max-w-tab sm:max-w-reset overflow-hidden'))}>
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
          className={css(tw('no-underline text-white hover:text-blue transition-color px-1 pt-1 p-1 rounded rounded-b-none block '), offerNavItemStyle)}>
      {props.children}
    </Link>
  </li>;

const OfferNav = ({ props }) =>
  <div className={css(tw('relative'))}>
    <nav className={css(tw('h-full relative z-10'))}>
      <Container>
      <ul className={css(tw('list-reset m-0 flex h-full justify-start pt-8 sm:pt-10 xl:pt-12 px-1'))}>
        <OfferNavItem exact to={'/angebot/'}>Übersicht</OfferNavItem>
        <OfferNavItem to={'/angebot/klein/'}>Amplify</OfferNavItem>
        <OfferNavItem to={'/angebot/gross/'}>Magazine</OfferNavItem>
        <OfferNavItem to={'/angebot/hosting/'}>Hosting</OfferNavItem>
      </ul>
      </Container>
    </nav>
    <div className={css(tw('absolute pin-t w-full h-full shadow-inner bg-black-transparent'))}>
      <Img sizes={ props.sizes } position="absolute" outerWrapperClassName="hero__bg-container" className={'hero__bg-image'} />
    </div>
  </div>;

export default OfferNav;
