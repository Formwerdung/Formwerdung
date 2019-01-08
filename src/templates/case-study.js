import React from 'react'
import { graphql } from 'gatsby'
import { css } from 'emotion'
import tw from 'tailwind.macro'
import { get } from 'lodash'

import Layout from '../components/Layout'
import Container, { containerStyleString } from '../components/Container'
import {
  Image,
  ImageContainer,
  ImageContentWrapper,
} from '../components/Images'
import SEO from '../components/SEO'

const paragraph = css`
  p {
    ${tw`md:w-4/5 lg:w-3/5 xl:w-1/2 mb-1x ${containerStyleString}`}
  }

  figure {
    ${tw`m-0 my-2x pt-2x px-2x bg-off-white border-border-light border border-solid`}
  }

  .figure__small {
    ${tw`md:w-4/5 lg:w-3/5 xl:w-1/2 md:ml-1/5 lg:ml-2/5 xl:pl-2x xl:ml-2x xl:mt-0 float-right`}
  }

  figure p {
    width: auto;
    margin: 0;
  }

  figcaption {
    ${tw`text-center italic py-1x`}
  }
`

export default ({ data }) => {
  const fluid = get(
    data,
    'markdownRemark.frontmatter.header.childImageSharp.fluid',
    {}
  )
  const description = `Webdesign Case Study von Formwerdung: ${
    data.markdownRemark.frontmatter.callToAction
  }`
  const title = data.markdownRemark.frontmatter.title
  const seoTitle = `${title} | Case Study | Formwerdung | Web Design aus der Schweiz`

  return (
    <Layout>
      <SEO title={seoTitle} description={description} />
      <figure className={css(tw`relative m-0`)}>
        <Container>
          <header>
            <ImageContentWrapper>
              <p
                className={css(
                  tw`text-white text-shadow relative z-10 m-0 max-w-hero md:max-w-hero-md pt-8x sm:pt-10x xl:pt-12x`
                )}
              >
                Case Study
              </p>
              <h1
                className={css(
                  tw`text-5xl leading-4x pb-1x text-white text-shadow relative z-10 m-0 pt-0`
                )}
              >
                {title}
              </h1>
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
          className={css(tw`p-1x mb-8x`, paragraph)}
        />
      </Container>
    </Layout>
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
