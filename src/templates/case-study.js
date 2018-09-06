/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import Layout from '../components/Layout';
import { css } from 'emotion';

export default ({ data }) =>
  <Layout>
    <p className={css(tw('mt-4'))}>Case Study</p>
    <h1>{ data.markdownRemark.frontmatter.title }</h1>
  </Layout>;

export const query = graphql`
  query caseStudyQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
      }
    }
  }
`;
