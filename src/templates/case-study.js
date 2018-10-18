import React from 'react'
import { css } from 'emotion'
import tw from 'tailwind.macro'

import Layout from '../components/Layout'
import Container from '../components/Container'

export default ({ data }) => (
  <Layout>
    <Container>
      <header className={css(tw`p-1`)}>
        <p className={css(tw`mt-4`)}>Case Study</p>
        <h1 className={css(tw`text-4xl leading-4`)}>
          {data.markdownRemark.frontmatter.title}
        </h1>
      </header>
    </Container>
    <Container>
      <div
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        className={css(tw`p-1 pt-0 md:w-4/5 lg:w-3/5 xl:w-1/2`)}
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
