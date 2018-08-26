/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import Container from '../Container';
import Nav from '../Nav';
import NavItem from '../NavItem';
import { css } from 'emotion';

const Colophon = () =>
  <footer className={css(tw('bg-grey-lighter'))}>
    <Container>
      <div className={css(tw('md:flex md:justify-between px-1'))}>
        <div className={css(tw('text-center py-1'))}>&copy; 2018 Formwerdung</div>
        <div className={css(tw('py-1'))}>
          <Nav>
            <NavItem to={'/about/'}>About</NavItem>
            <NavItem to={'/imprint/'}>Impressum</NavItem>
          </Nav>
        </div>
      </div>
    </Container>
  </footer>;

export default Colophon;