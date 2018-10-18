import React from 'react'
import { graphql } from 'gatsby'
import { css } from 'emotion'
import tw from 'tailwind.macro'

import Container from '../../components/Container'
import Layout from '../../components/Layout'
import OfferNav from '../../components/OfferNav'

export default props => (
  <Layout>
    <div className={css(tw`relative`)}>
      <OfferNav props={props.data.file} />
      <Container>
        <div className={css(tw`px-1`)}>Hosting</div>
      </Container>
    </div>
  </Layout>
)

export const query = graphql`
  query OfferHostingQuery {
    file: imageSharp(id: { regex: "/hero/" }) {
      sizes(
        maxWidth: 1920
        quality: 90
        traceSVG: { background: "#fff", color: "#f8fafc" }
      ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
