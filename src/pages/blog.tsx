import React from 'react'
import { graphql } from 'gatsby'
import {
  Card,
  Heading,
  Text,
  Container,
  Lead,
  Grid,
  Stack,
  Shifter,
  Box,
} from '../ui'
import { get } from 'lodash'
import { Header } from '../components/Header'

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(edge => ({
    date: get(edge, 'node.frontmatter.date', ''),
    excerpt: get(edge, 'node.frontmatter.excerpt', ''),
    slug: get(edge, 'node.fields.slug', ''),
    title: get(edge, 'node.frontmatter.title', ''),
  }))

  return (
    <div className="bg-gray-400">
      <Header headerImage={data.heroImage.fluid}>
        <Container align="left">
          <div
            css={`
              @apply pt-16 pb-32 mx-6;
            `}
          >
            <Stack>
              <Heading mode="dark">All Blog Posts</Heading>
              <Lead>
                Welcome to my Web Log! Here you'll find pieces of various length
                about various frontend and design topics, some tutorials, some
                more conceptual stuff.
              </Lead>
            </Stack>
          </div>
        </Container>
      </Header>
      <Shifter as="section">
        <Box>
          <Grid size="medium">
            {posts.length > 0 &&
              posts.map((post: any, index: number) => (
                <Card key={index} to={`blog${post.slug}`}>
                  <Stack>
                    <header>
                      <Heading component="h2" level={2}>
                        {post.title}
                      </Heading>
                      <p
                        css={`
                          @apply text-gray-600;
                        `}
                      >
                        {post.date}
                      </p>
                    </header>
                    <Text>{post.excerpt}</Text>
                  </Stack>
                </Card>
              ))}
          </Grid>
        </Box>
      </Shifter>
    </div>
  )
}

export const query = graphql`
  query blogPageQuery {
    heroImage: imageSharp(
      fluid: { originalName: { regex: "/offer-divider/" } }
    ) {
      fluid(maxWidth: 1920, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    allMarkdownRemark(filter: { fields: { collection: { eq: "blog" } } }) {
      edges {
        node {
          frontmatter {
            title
            excerpt
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
