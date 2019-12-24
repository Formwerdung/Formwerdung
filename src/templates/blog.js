/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { graphql } from 'gatsby'
import tw from 'tailwind.macro'

import Layout from '../components/Layout'

export default ({ data }) => (
  <Layout>
    <p css={tw`mt-4x`}>Blog Post</p>
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
