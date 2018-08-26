/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import Layout from '../components/Layout';
import { css } from 'emotion';

export default () => (
  <Layout>

    <h1 className={css(tw('pt-8'))}>Angebot</h1>

  </Layout>
);
