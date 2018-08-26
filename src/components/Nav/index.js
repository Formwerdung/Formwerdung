/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import { css } from 'emotion';

const Nav = ({ children }) => (
  <nav>
    <ul className={css(tw('list-reset m-0 flex h-full'))}>
      { children }
    </ul>
  </nav>
);

export default Nav;