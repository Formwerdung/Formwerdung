/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import Banner from '../Banner';
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
      <div className={css(tw('mt-3'))}>
        {children}
      </div>
    </main>
    <section id={'contact'}>
      <h2>Kontakt</h2>
      <form method="post" action="#" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6" />
        </div>
        <ul className="actions">
          <li><input type="submit" value="Send Message" className="special" /></li>
          <li><input type="reset" value="Clear" /></li>
        </ul>
      </form>
    </section>
    <Colophon />
  </div>
);

export default Layout;