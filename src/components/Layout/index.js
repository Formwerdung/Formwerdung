/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import Banner from '../Banner';
import Contact from '../Contact';
import Colophon from '../Colophon';
import Nav from '../Nav';
import { css } from 'emotion';
import '../../../global.css';

const Layout = ({ children }) => (
  <div className={css(tw('font-sans'))}>
    <Banner>
      <Nav />
    </Banner>
    <main className={css(tw('shadow relative pb-8'))}>
      <div className={css(tw('mt-3 mb-8'))}>
        {children}
      </div>
      <Contact />
    </main>
    <Colophon />
  </div>
);

export default Layout;
