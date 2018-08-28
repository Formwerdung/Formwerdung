/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import Cases from '../components/Cases';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Products from '../components/Products';
import styled from 'react-emotion';
import { get } from 'lodash';
import Divider from '../components/Divider';


const Graf = styled('p')`
${tw('p-1 m-0 text-md')}
`;

class IndexPage extends React.Component {

  render() {
    const imgFile = this.props.data.file;
    const portfolioImg = this.props.data.portfolio;
    const caseStudies = get(this, 'props.data.allMarkdownRemark.edges', []);

    return (
      <Layout>
        <Hero props={ imgFile } />
        <Cases props={ caseStudies } />
        <Divider image={ portfolioImg }
                 lineOne={'Mehr Arbeiten sehen?'}
                 lineTwo={'Zum Portfolio.'}
                 route={'/portfolio/'} />
        <Products />
        <Divider image={ portfolioImg }
                 lineOne={'Mehr Infos zum Angebot?'}
                 lineTwo={'Zur Übersicht.'}
                 route={'/angebot/'} />

          <section>
            <Container>
              <Graf>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </Graf>
            </Container>
          </section>

      </Layout>
    )
  }
}

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    file: imageSharp(id: { regex: "/hero/" }) {
      sizes(
        maxWidth: 1920
        quality: 90
        traceSVG: { background: "#fff", color: "#f8fafc" }
      ) {
        ...GatsbyImageSharpSizes
      } 
    }
    portfolio: imageSharp(id: { regex: "/portfolio/" }) {
      sizes(
        maxWidth: 1920
        quality: 90
        traceSVG: { background: "#fff", color: "#f8fafc" }
      ) {
        ...GatsbyImageSharpSizes
      } 
    }
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(case-studies)/"}}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            callToAction
          }
        }
      }
    }
  } 
`;