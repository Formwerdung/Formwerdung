import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import Cases from '../components/Cases'
import Divider from '../components/Divider'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Products from '../components/Products'
import SEO from '../components/SEO'

class IndexPage extends React.Component {
  render() {
    const heroFluid = this.props.data.hero.fluid
    const portfolioFluid = this.props.data.portfolio.fluid
    const offerFluid = this.props.data.offer.fluid
    const caseStudies = get(this, 'props.data.allMarkdownRemark.edges', [])

    return (
      <Layout>
        <SEO />
        <Hero fluid={heroFluid} />
        <Cases props={caseStudies} />
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
}

export default IndexPage

export const query = graphql`
  {
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
