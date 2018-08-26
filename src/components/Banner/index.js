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
import { Link } from 'gatsby';
import { css } from 'emotion';
import logoSmall from './formwerdung-logo-small.svg';
import logoLarge from './formwerdung-logo-large.svg';

const PrimaryNav = () =>
  <Nav>
    <NavItem to={'/angebot/'}>Angebot</NavItem>
    <NavItem to={'/portfolio/'}>Portfolio</NavItem>
    <NavItem to={'/contact/'}>Kontakt</NavItem>
  </Nav>;

const Banner = () =>
  <header className={css(tw('bg-white shadow w-full h-3 fixed pin-t z-20'))}>
    <Container>
      <div className={css(tw('h-full py-xs flex justify-between px-1'))}>
        <Link to={'/'} className={css(tw('max-w-hack'))}>
          <img src={logoSmall} alt={'The Formwerdung Logo'} className={css(tw('h-full md:hidden block'))} />
          <img src={logoLarge} alt={'The Formwerdung Logo'} className={css(tw('h-full hidden md:block'))} />
        </Link>
        <PrimaryNav />
      </div>
    </Container>
  </header>;

export default Banner;