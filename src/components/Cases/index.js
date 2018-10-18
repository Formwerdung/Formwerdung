/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import CaseCard from '../CaseCard';
import Container from '../Container';
import { css } from 'emotion';

const Cases = ({ props }) =>
  <section>
    <Container>
      <ul className={css(tw('list-reset m-0 p-0 sm:flex sm:flex-wrap sm:justify-center'))}>
        { props.map((edge, i) => <CaseCard key={i} props={ edge.node } latest={i > 1} first={i === 0} order={i} />) }
      </ul>
    </Container>
  </section>;

export default Cases;
