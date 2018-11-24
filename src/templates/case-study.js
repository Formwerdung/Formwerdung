import React from 'react'
import { graphql } from 'gatsby'
import { css } from 'emotion'
import tw from 'tailwind.macro'

import Layout from '../components/Layout'
import Container from '../components/Container'

const paragraph = css`

  p {
    margin-bottom: 0.75rem;
  }
`

export default ({ data }) => (
  <Layout>
    <Container>
      <header className={css(tw`p-1x`)}>
        <p className={css(tw`mt-4x`)}>Case Study</p>
        <h1 className={css(tw`text-4xl leading-4`)}>
          {data.markdownRemark.frontmatter.title}
        </h1>
      </header>
    </Container>
    <Container>
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
      }
    }
  }
`
