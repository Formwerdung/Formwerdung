import React from 'react'
import { graphql } from 'gatsby'
import { Header } from '../components/Header'
import { Box, Card, Container, Heading } from '../ui'
import { FluidObject } from 'gatsby-image'
import { ImageSharpFluid } from '../../graphql-types'
import { Layout } from '../components/Layout'

export default ({ data }) => {
  const offerFluid: ImageSharpFluid = data.offer.fluid

  return (
    <Layout>
      <Header headerImage={offerFluid as FluidObject}>
        <Container>
          <Box>
            <Card>
              <Heading>{data.markdownRemark.frontmatter.title}</Heading>
            </Card>
          </Box>
        </Container>
      </Header>
      <Container>
        <Box>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Box>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query blogQuery($slug: String!) {
    offer: imageSharp(fluid: { originalName: { regex: "/offer-divider/" } }) {
      fluid(maxWidth: 1920, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
