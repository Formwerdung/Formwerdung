import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export default ({ data }) => (
  <Layout>
    <p
      css={`
        @apply mt-4x;
      `}
    >
      Blog Post
    </p>
    <h1>{data.markdownRemark.frontmatter.titel}</h1>
  </Layout>
)

export const query = graphql`
  query blogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
