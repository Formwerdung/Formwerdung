/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import { css } from 'emotion';
import config from '../../../tailwind';

export const AnchorItem = props =>
  <li className={css(tw('h-full pl-1 my-auto'))}>
    <AnchorLink href="#contact"
                className={css(tw('leading-3 text-black hover:text-blue-dark transition-color'))}>
      { props.children }
    </AnchorLink>
  </li>;

export const NavItem = props =>
  <li className={css(tw('h-full px-1 border-solid border-grey-light border border-l-0 border-t-0 border-b-0'))}>
    <Link to={props.to}
          activeStyle={{
            color: config.colors['blue-dark']
          }}
          exact={props.exact}
          className={css(tw('leading-3 no-underline text-black hover:text-blue-dark transition-color'))}>
      { props.children }
    </Link>
  </li>;

export const Nav = ({ children }) =>
  <nav className={css(tw('h-full'))}>
    <ul className={css(tw('list-reset m-0 flex h-full'))}>
      { children }
    </ul>
  </nav>;
