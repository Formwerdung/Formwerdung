import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import { get } from 'lodash'
import React, { FunctionComponent } from 'react'

import './global.css'

import { ImageSharpFluid, IndexPageQuery } from '../../graphql-types'
import BannerLogoSmall from '../components/Banner/BannerLogoSmall'
import { Image } from '../components/Images'
import {
  Card,
  Device,
  Heading,
  Imposter,
  ImposterWrapper,
  Stack,
  Text,
  Nav,
  NavItem,
  Grid,
  Lead,
  Shifter,
  Box,
} from '../ui'
import { Header } from '../components/Header'

interface Props {
  data: IndexPageQuery
}

const IndexPage: FunctionComponent<Props> = ({ data }) => {
  const heroFluid: ImageSharpFluid = data.hero.fluid
  const portfolioFluid: ImageSharpFluid = data.portfolio.fluid
  const offerFluid: ImageSharpFluid = data.offer.fluid
  const caseStudies = get(data, 'allMarkdownRemark.edges', []).map(edge => ({
    url: `${get(edge, 'node.fields.collection', '')}${get(
      edge,
      'node.fields.slug',
      ''
    )}`,
    title: get(edge, 'node.frontmatter.title', ''),
    callToAction: get(edge, 'node.frontmatter.callToAction', ''),
    fluidImage: get(edge, 'node.frontmatter.image.childImageSharp.fluid', null),
  }))

  return (
    <div className="bg-gray-400">
      <Stack size="none">
        <Header headerImage={heroFluid as FluidObject}>
          <div
            css={`
              @apply pb-24 relative z-1 m-6;
            `}
          >
            <Heading level={1} mode="dark">
              Formwerdung <em>ist Performance</em>
            </Heading>
            <Lead>
              Formwerdung meistert mit Ihnen komplexe ästhetische und technische
              Probleme auf dem Weg zum erfolgreichen Webauftritt.
            </Lead>
          </div>
        </Header>
        <Shifter>
          <Box>
            <Grid>
              <Card>
                <Stack size="small">
                  <Heading component="h2">WordPress</Heading>
                  <Text>WordPress is a very nice CMS.</Text>
                </Stack>
              </Card>
              <Card>
                <Heading component="h2">WordPress</Heading>
                <Text>WordPress is a very nice CMS.</Text>
              </Card>
              <Card>
                <Heading component="h2">WordPress</Heading>
                <Text>WordPress is a very nice CMS.</Text>
              </Card>
              <Card>
                <Heading component="h2">WordPress</Heading>
                <Text>WordPress is a very nice CMS.</Text>
              </Card>
              <Card>
                <Heading component="h2">WordPress</Heading>
                <Text>WordPress is a very nice CMS.</Text>
              </Card>
              <Card>
                <Heading component="h2">WordPress</Heading>
                <Text>WordPress is a very nice CMS.</Text>
              </Card>
            </Grid>
          </Box>
        </Shifter>
        <div>
          <ImposterWrapper>
            <p className="text-white block py-8 z-1 relative">This is a link</p>
            <Imposter variant="full">
              <Image fluid={portfolioFluid as FluidObject} />
            </Imposter>
          </ImposterWrapper>
        </div>
        <Device fluidImage={caseStudies[0].fluidImage}></Device>
        <Device
          fluidImage={caseStudies[0].fluidImage}
          orientation="left"
        ></Device>
      </Stack>
    </div>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query IndexPage {
    hero: imageSharp(fluid: { originalName: { regex: "/hero/" } }) {
      fluid(maxWidth: 1920, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    portfolio: imageSharp(
      fluid: { originalName: { regex: "/portfolio-divider/" } }
    ) {
      fluid(maxWidth: 1920, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    offer: imageSharp(fluid: { originalName: { regex: "/offer-divider/" } }) {
      fluid(maxWidth: 1920, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(case-study)/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          id
          fields {
            collection
            slug
          }
          frontmatter {
            title
            callToAction
            image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 320) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
