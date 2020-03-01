import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { css } from 'astroturf'

import Container from '../components/Container'
import { HeroTitle } from '../components/Hero'
import {
  Image,
  ImageContainer,
  ImageContentWrapper,
} from '../components/Images'
import SEO from '../components/SEO'
import { Graf, TextContainer } from '../components/Type'

const PortfolioCard = ({ props }) => (
  <li>
    <a
      href={props.frontmatter.url}
      target={'_blank'}
      rel={'noopener, noreferrer'}
      css={css`
        @apply opacity-75 block;
      `}
    >
      <section>
        <div
          css={css`
            @apply mx-auto max-w-card;
          `}
        >
          <div>
            <Img fluid={props.frontmatter.image.childImageSharp.fluid} />
          </div>
          <div
            css={css`
              @apply p-1x;
            `}
          >
            <h2
              css={css`
                @apply text-md  text-black text-black;
              `}
            >
              {props.frontmatter.title}
            </h2>
            <div
              css={css`
                @apply text-black text-black;
              `}
              dangerouslySetInnerHTML={{ __html: props.html }}
            />
          </div>
        </div>
      </section>
    </a>
  </li>
)

const PortfolioPage = props => (
  <div>
    <SEO
      title={'Portfolio | Formwerdung | Web Design aus der Schweiz'}
      description={
        'Ein ausführlicher Überblick über unser Schaffen: Unser Portfolio mit einer breiten Auswahl von Arbeiten.'
      }
    />
    <figure
      css={css`
        @apply relative m-0;
      `}
    >
      <Container>
        <ImageContentWrapper>
          <HeroTitle>Portfolio</HeroTitle>
        </ImageContentWrapper>
      </Container>
      <ImageContainer>
        <Image fluid={props.data.portfolio.fluid} />
      </ImageContainer>
    </figure>
    <Container>
      <TextContainer>
        <Graf>
          Schaffen Sie sich einen Überblick über unser Schaffen mit dieser
          breiten Auswahl von Arbeiten.
        </Graf>
      </TextContainer>
      <div
        css={css`
          @apply pt-4x pb-8x;
        `}
      >
        <ul
          css={css`
            @apply flex flex-wrap m-0;
          `}
        >
          {props.data.allMarkdownRemark.edges.map((edge, i) => (
            <PortfolioCard key={i} props={edge.node} order={i} />
          ))}
        </ul>
      </div>
    </Container>
  </div>
)

export default PortfolioPage

export const query = graphql`
  query PortfolioQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
      sort: { fields: [frontmatter___order], order: DESC }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            tech
            url
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
    portfolio: imageSharp(
      fluid: { originalName: { regex: "/portfolio-main/" } }
    ) {
      fluid(maxWidth: 1920, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`
