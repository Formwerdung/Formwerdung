import React from 'react'
import { graphql } from 'gatsby'
import { css } from 'emotion'
import tw from 'tailwind.macro'

import Layout from '../components/Layout'

export default ({ data }) => (
  <Layout>
    <p className={css(tw`mt-4`)}>Blog Post</p>
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
