import React from 'react'
import Cases from '../components/Cases'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Products from '../components/Products'
import { get } from 'lodash'
import Divider from '../components/Divider'

class IndexPage extends React.Component {
  render() {
    const imgFile = this.props.data.file
    const portfolioImg = this.props.data.portfolio
    const caseStudies = get(this, 'props.data.allMarkdownRemark.edges', [])

    return (
      <Layout>
        <Hero props={imgFile} />
        <Cases props={caseStudies} />
        <Divider
          image={portfolioImg}
          lineOne={'Mehr Arbeiten sehen?'}
          lineTwo={'Zum Portfolio.'}
          route={'/portfolio/'}
        />
        <Products />
        <Divider
          image={portfolioImg}
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
`
