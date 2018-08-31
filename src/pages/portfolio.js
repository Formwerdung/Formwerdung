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
      <div className={css(tw('pt-8 sm:flex sm:flex-wrap sm:max-w-card-2 sm:ml-1 lg:max-w-card-3 xl:max-w-card-4'))}>
      { props.data.allMarkdownRemark.edges.map((edge, i) =>
        <section key={i} className={css(tw('sm:w-1/2 lg:w-1/3 xl:w-1/4 border border-l-0 border-t-0 border-border border-solid'))}>
          <div className={css(tw('mx-auto max-w-card'))}>
            <Img sizes={ edge.node.frontmatter.image.childImageSharp.sizes }
                  outerWrapperClassName={css(tw('h-12'))}
                  className={css(tw('h-12'))} />
            <h2>{ edge.node.frontmatter.title }</h2>
            <p>{ edge.node.frontmatter.tech }</p>

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
          frontmatter {
            title
            tech
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
