/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import OfferNav from '../../components/OfferNav';
import { css } from 'emotion';

export default props =>
  <Layout>
    <div className={css(tw('relative'))}>
      <OfferNav props={ props.data.file } />
      <Container>
        <div className={css(tw('px-1'))}>
          Hosting
        </div>
      </Container>
    </div>
  </Layout>;

export const query = graphql`
  query OfferHostingQuery {
    file: imageSharp(id: { regex: "/hero/" }) {
      sizes(
        maxWidth: 1920
        quality: 90
        traceSVG: { background: "#fff", color: "#f8fafc" }
      ) {
        ...GatsbyImageSharpSizes
      } 
    }
  }
`;
