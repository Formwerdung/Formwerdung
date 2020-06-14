import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import { get } from 'lodash'
import React, { FunctionComponent } from 'react'

import './global.css'

import { ImageSharpFluid, IndexPageQuery } from '../../graphql-types'
import BannerLogoSmall from '../components/Logo'
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
  Container,
} from '../ui'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'

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
    <Layout>
      <Stack size="none">
        <Header headerImage={heroFluid as FluidObject}>
          <Container
            css={`
              @apply pb-24 relative z-1 mx-6 mt-24 mb-12;
            `}
            size="small"
          >
            <div
              css={`
                @apply mb-3;
              `}
            >
              <Heading level={1} mode="dark">
                <em>Web design and development</em>
              </Heading>
            </div>
            <Lead>
              Formwerdung meistert mit Ihnen komplexe ästhetische und technische
              Probleme auf dem Weg zum erfolgreichen Webauftritt.
            </Lead>
          </Container>
        </Header>
        <Shifter>
          <div
            css={`
              @apply flex px-6;
            `}
          >
            <div
              css={`
                @apply pt-12 pr-6 w-small flex-shrink-0;
              `}
            >
              <Stack>
                <Heading level={2}>Projects</Heading>
                <Text>The fol</Text>
              </Stack>
            </div>
            <ul
              css={`
                @apply flex overflow-x-auto p-6 -mx-6 pb-3;

                & > * + * {
                  margin-left: 1.5rem;
                }
              `}
            >
              <Card as="li">
                <Stack size="small">
                  <Heading component="h2" level={2}>
                    WordPress
                  </Heading>
                  <Text>
                    I design and develop custom themes for ecommerce and
                    magazines.
                  </Text>
                </Stack>
              </Card>
              <Card>
                <Stack size="small">
                  <Heading component="h2" level={2}>
                    Responsive Design
                  </Heading>
                  <Text>
                    Accessible mobile-first design for your website that focuses
                    on ease of use. Or let me review your design as regards
                    responsiveness. Your choice.
                  </Text>
                </Stack>
              </Card>
              <div
                css={`
                  @apply pr-6;
                `}
              >
                <Card>
                  <Stack size="small">
                    <Heading component="h2" level={2}>
                      Smaller Homepages
                    </Heading>
                    <Text>
                      I will help you get started on the web by developing your
                      blog, portfolio or any other microsite – focusing on the
                      minimal viable solution so you get the most bang for your
                      buck.
                    </Text>
                  </Stack>
                </Card>
              </div>
            </ul>
          </div>
          <div
            css={`
              @apply flex;
            `}
          >
            <ul
              css={`
                @apply flex overflow-x-auto p-6 pt-3;

                & > * + * {
                  margin-left: 1.5rem;
                }
              `}
            >
              <Card as="li" mode="dark">
                <Stack size="small">
                  <Heading component="h2" level={2}>
                    WordPress
                  </Heading>
                  <Text>
                    I design and develop custom themes for ecommerce and
                    magazines.
                  </Text>
                </Stack>
              </Card>
              <Card mode="dark">
                <Stack size="small">
                  <Heading component="h2" level={2}>
                    Responsive Design
                  </Heading>
                  <Text>
                    Accessible mobile-first design for your website that focuses
                    on ease of use. Or let me review your design as regards
                    responsiveness. Your choice.
                  </Text>
                </Stack>
              </Card>
              <div
                css={`
                  @apply pr-6;
                `}
              >
                <Card mode="dark">
                  <Stack size="small">
                    <Heading component="h2" level={2}>
                      Smaller Homepages
                    </Heading>
                    <Text>
                      I will help you get started on the web by developing your
                      blog, portfolio or any other microsite – focusing on the
                      minimal viable solution so you get the most bang for your
                      buck.
                    </Text>
                  </Stack>
                </Card>
              </div>
            </ul>
            <div
              css={`
                @apply pt-9 pl-6 w-small flex-shrink-0;
              `}
            >
              <Stack>
                <Heading level={2}>Projects</Heading>
                <Text>The fol</Text>
              </Stack>
            </div>
          </div>
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
    </Layout>
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
