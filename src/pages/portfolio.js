import React from 'react'
import Img from 'gatsby-image'
import { css } from 'emotion'
import tw from 'tailwind.macro'

import Container from '../components/Container'
import Layout from '../components/Layout'
import { deviceLeft, deviceRight, screenImage } from '../utils/style'

const PortfolioCard = ({ order, props }) => (
  <section
    className={css(
      tw`sm:w-1/2 lg:w-1/3 xl:w-1/4 border border-l-0 border-t-0 border-border border-solid`
    )}
  >
    <div className={css(tw`mx-auto max-w-card`)}>
      <div className={order % 2 ? deviceLeft : deviceRight}>
        <Img
          fluid={props.frontmatter.image.childImageSharp.fluid}
          className={screenImage}
        />
      </div>
      <div className={css(tw`p-1x`)}>
        <h2 className={css(tw`text-md leading-2x`)}>
          {props.frontmatter.title}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: props.html }} />
      </div>
    </div>
  </section>
)

const PortfolioPage = props => (
  <Layout>
    <Container>
      <h1 className={css(tw`pt-8x`)}>Portfolio</h1>
      <p>Eine breite Auswahl unserer Arbeiten.</p>
      <div className={css(tw`pt-8x sm:flex sm:flex-wrap`)}>
        {props.data.allMarkdownRemark.edges.map((edge, i) => (
          <PortfolioCard key={i} props={edge.node} order={i} />
        ))}
      </div>
    </Container>
  </Layout>
)

export default PortfolioPage

export const query = graphql`
  query PortfolioQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
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
