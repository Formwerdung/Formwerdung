import React from 'react'
import { graphql } from 'gatsby'
import { css } from 'emotion'
import tw from 'tailwind.macro'

import Layout from '../components/Layout'
import Container from '../components/Container'
import { Image, ImageContainer, ImageContentWrapper } from '../components/Images'
import { HeroTitle } from '../components/Hero'

const paragraph = css`

  p {
    margin-bottom: 0.75rem;
  }
`

export default ({ data }) => (
  <Layout>
    <figure className={css(tw`relative m-0`)}>
      <div className={css(tw`pt-16x`)}/>
      <ImageContainer>
        <Image fluid={data.markdownRemark.frontmatter.header.childImageSharp.fluid} />
      </ImageContainer>
    </figure>
    <Container>
      <header className={css(tw`p-1x`)}>
        <p className={css(tw`mt-4x`)}>Case Study</p>
        <h1 className={css(tw`text-4xl leading-4`)}>
          {data.markdownRemark.frontmatter.title}
        </h1>
      </header>
      <div
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        className={css(tw`p-1x pt-0 md:w-4/5 lg:w-3/5 xl:w-1/2`, paragraph)}
      />
    </Container>
  </Layout>
)

export const query = graphql`
  query caseStudyQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        header {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
