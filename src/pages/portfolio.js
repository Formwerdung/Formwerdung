/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import Img from 'gatsby-image';
import Container from '../components/Container';
import Layout from '../components/Layout';
import { css } from 'emotion';

const PortfolioPage = props =>
  <Layout>
    <Container>
      <h1 className={css(tw('pt-8'))}>Portfolio</h1>
      <p>Eine breite Auswahl unserer Arbeiten.</p>
      <div className={css(tw('pt-8 sm:flex sm:flex-wrap'))}>
      { props.data.allMarkdownRemark.edges.map((edge, i) =>
        <section key={i} className={css(tw('sm:w-1/2 lg:w-1/3 xl:w-1/4 border border-l-0 border-t-0 border-border border-solid'))}>
          <div className={css(tw('mx-auto max-w-card'))}>
            <div className={`device-${i%2 ? 'left' : 'right'}`}>
              <Img sizes={ edge.node.frontmatter.image.childImageSharp.sizes }
                   className={css(tw('screen-image-right'))} />
            </div>
            <div className={css(tw('p-1'))}>
              <h2 className={css(tw('text-md leading-2'))}>{ edge.node.frontmatter.title }</h2>
              <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
            </div>
          </div>
        </section>
      )}
      </div>
    </Container>
  </Layout>;

export default PortfolioPage;

export const query = graphql`
  query PortfolioQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(portfolio)/"}}) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            image {
              publicURL
              childImageSharp {
                sizes(maxWidth: 320) {
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`;
