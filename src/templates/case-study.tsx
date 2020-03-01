import { graphql } from 'gatsby'
import { get } from 'lodash'
import React from 'react'

import Container from '../components/Container'
import {
  Image,
  ImageContainer,
  ImageContentWrapper,
} from '../components/Images'

import SEO from '../components/SEO'

const caseStudyTitle = `@apply text-5xl leading-4x pb-1x text-white relative z-1 m-0 pt-0`

export default ({ data }) => {
  const fluid = get(
    data,
    'markdownRemark.frontmatter.header.childImageSharp.fluid',
    {}
  )
  const description = `Webdesign Case Study von Formwerdung: ${data.markdownRemark.frontmatter.callToAction}`
  const title = data.markdownRemark.frontmatter.title
  const seoTitle = `${title} | Case Study | Formwerdung | Web Design aus der Schweiz`

  return (
    <div>
      <SEO title={seoTitle} description={description} />
      <figure
        css={`
          @apply relative m-0;
        `}
      >
        <Container>
          <header>
            <ImageContentWrapper>
              <p
                css={`
                  @apply text-white relative z-1 m-0 max-w-hero max-w-hero-md pt-8x pt-10x pt-12x;
                `}
              >
                Case Study
              </p>
              <h1>{title}</h1>
            </ImageContentWrapper>
          </header>
        </Container>
        <ImageContainer>
          <Image fluid={fluid} />
        </ImageContainer>
      </figure>
      <Container>
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          css={`
            @apply p-1x mb-8x;
          `}
        />
      </Container>
    </div>
  )
}

export const query = graphql`
  query caseStudyQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        callToAction
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
