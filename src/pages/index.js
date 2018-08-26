/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import Img from 'gatsby-image';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Products from '../components/Products';
import styled from 'react-emotion';
import { css } from 'emotion';
import { get } from 'lodash';
import CaseCard from '../components/CaseCard';


const Graf = styled('p')`
${tw('p-1 m-0 text-md')}
`;

class IndexPage extends React.Component {

  render() {
    const imgFile = this.props.data.file;
    const portfolioImg = this.props.data.portfolio;
    const caseStudies = get(this, 'props.data.allMarkdownRemark.edges', []);

    console.log(this.props.data);

    return (
      <Layout>

          <Hero props={ imgFile } />

          <section>
            <Container>
              <ul className={css(tw('list-reset m-0 p-0 md:flex'))}>
                { caseStudies.map((edge, i) => <CaseCard key={i} props={edge.node.frontmatter} />) }
              </ul>
            </Container>
          </section>

          <div className={css(tw('relative'))}>
            <Container>
              <p className={css(tw('px-1 py-2 text-white text-center font-semibold relative z-10 m-0'), {'text-shadow': '0 4px 4px rgba(0,0,0,0.5)'})}>
                Mehr Arbeiten sehen?<br />
                Zum Portfolio.
              </p>
            </Container>
            <div className={css(tw('absolute pin-t w-full h-full'))}>
              <Img sizes={ portfolioImg.sizes } position="absolute" outerWrapperClassName="hero__bg-container" className={'hero__bg-image'} />
            </div>
          </div>

          <Products />

          <div className={css(tw('relative'))}>
            <Container>
              <p className={css(tw('px-1 py-2 text-white text-center font-semibold relative z-10 m-0'), {'text-shadow': '0 4px 4px rgba(0,0,0,0.5)'})}>
                Mehr Arbeiten sehen?<br />
                Zum Portfolio.
              </p>
            </Container>
            <div className={css(tw('absolute pin-t w-full h-full'))}>
              <Img sizes={ portfolioImg.sizes } position="absolute" outerWrapperClassName="hero__bg-container" className={'hero__bg-image'} />
            </div>
          </div>

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