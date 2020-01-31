import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { css, jsx } from '@emotion/core'
import { get } from 'lodash';

import { ImageSharpFluid, IndexPageQuery } from '../../graphql-types';
import { CaseList } from '../components/Cases/CaseList';
import Divider from '../components/Divider';
import { Hero } from '../components/Hero';
import Layout from '../components/Layout';
import Products from '../components/Products';
import SEO from '../components/SEO';

interface Props {
  data: IndexPageQuery;
}

const IndexPage: FunctionComponent<Props> = ({ data }) => {
  const heroFluid: ImageSharpFluid = data.hero.fluid
  const portfolioFluid: ImageSharpFluid = data.portfolio.fluid
  const offerFluid: ImageSharpFluid = data.offer.fluid
  const caseStudies = get(data, 'allMarkdownRemark.edges', []).map(edge => ({
    url: `${get(edge, 'node.fields.collection', '')}${get(edge, 'node.fields.slug', '')}`,
    title: get(edge, 'node.frontmatter.title', ''),
    callToAction: get(edge, 'node.frontmatter.callToAction', ''),
    fluidImage: get(edge, 'node.frontmatter.image.childImageSharp.fluid', null)
  }))

  console.log(caseStudies)

  return (
    <Layout>
      <SEO title={''} />
      <Hero fluid={heroFluid} />
      <CaseList caseStudies={caseStudies} />
      <Divider
        fluid={portfolioFluid}
        lineOne={'Mehr Arbeiten sehen?'}
        lineTwo={'Zum Portfolio.'}
        route={'/portfolio/'}
      />
      <Products />
      <Divider
        fluid={offerFluid}
        lineOne={'Mehr Infos zum Angebot?'}
        lineTwo={'Zur Übersicht.'}
        route={'/angebot/'}
      />
    </Layout>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query IndexPage {
    hero: imageSharp(fluid: { originalName: { regex: "/hero/" } }) {
      fluid(maxWidth: 1920, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    portfolio: imageSharp(
      fluid: { originalName: { regex: "/portfolio-divider/" } }
    ) {
      fluid(maxWidth: 1920, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    offer: imageSharp(fluid: { originalName: { regex: "/offer-divider/" } }) {
      fluid(maxWidth: 1920, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(case-study)/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          id
          fields {
            collection
            slug
          }
          frontmatter {
            title
            callToAction
            image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 320) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
