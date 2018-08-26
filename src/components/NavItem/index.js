/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import { Link } from 'gatsby';
import { css } from 'emotion';

export const NavItem = props =>
  <li className={css(tw('pl-1 my-auto'))}>
    <Link to={props.to}
          activeStyle={{
            color: '#080401'
          }}
          exact={props.exact}
          className={css(tw('no-underline text-blue hover:text-black transition-color'))}>
      {props.children}
    </Link>
  </li>;

export default NavItem;