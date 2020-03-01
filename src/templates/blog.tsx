import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <div
    css={`
      max-width: 60ch;
      margin: 0 auto;
    `}
  >
    <p
      css={`
        @apply mt-4x;
      `}
    >
      Blog Post
    </p>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </div>
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
