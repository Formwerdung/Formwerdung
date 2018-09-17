/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import Layout from '../components/Layout';
import { css } from 'emotion';
import Container from '../components/Container';

export default ({ data }) =>
  <Layout>
    <Container>
      <header className={css(tw('p-1'))}>
        <p className={css(tw('mt-4'))}>Case Study</p>
        <h1 className={css(tw('text-4xl leading-4'))}>{ data.markdownRemark.frontmatter.title }</h1>
      </header>
    </Container>
    <Container>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
           className={css(tw('p-1 pt-0 md:w-4/5 lg:w-3/5 xl:w-1/2'))}/>
    </Container>
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
