import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { css } from 'emotion'
import tw from 'tailwind.macro'

import Container from '../components/Container'
import Layout from '../components/Layout'
import { borderTop, deviceLeft, deviceRight, mq, screenImage } from '../utils/style'
import { HeroTitle } from '../components/Hero'
import { Image, ImageContainer, ImageContentWrapper } from '../components/Images'
import { Graf, TextContainer } from '../components/Type';
import config from '../../tailwind';

const sectionStyles = tw`sm:w-1/2 lg:w-1/3 xl:w-1/4 py-1x`

const oddStyling = css`
  ${mq[0]} {
    border-bottom: 1px solid ${config.colors['grey-light']};
  }
`;

const evenStyling = css`
  ${mq[0]} {
    border-right: 1px solid ${config.colors['grey-light']};
  }
`;

const secondOfThreeStyling = css`
  ${mq[2]} {
    border-right: 1px solid ${config.colors['grey-light']};
  }
`;

const thirdOfThreeStyling = css`
  ${mq[2]} {
    border-right: none;
  }
`;

const lastStylingLG = css`
  ${mq[2]} {
    border-bottom: none;
  }
`;

const borderWhenFourStyling = css`
  ${mq[3]} {
    border-right: 1px solid ${config.colors['grey-light']};
  }
`;

const noBorderWhenFour = css`
  ${mq[3]} {
    border-right: none;
  }
`;


const PortfolioCard = ({ order, props }) => (
  <li className={css(
    sectionStyles,
    oddStyling,
    order % 2 ? {} : evenStyling,
    order % 3 === 0 ? secondOfThreeStyling : {},
    order % 3 === 1 ? secondOfThreeStyling : {},
    order % 3 === 2 ? thirdOfThreeStyling : {},
    order % 4 === 0 ? borderWhenFourStyling : {},
    order % 4 === 1 ? borderWhenFourStyling : {},
    order % 4 === 2 ? borderWhenFourStyling : {},
    order % 4 === 3 ? noBorderWhenFour : {},
    order === 12 ? thirdOfThreeStyling : {},
    order === 12 ? lastStylingLG : {},
  )}>
    <a href={props.frontmatter.url}
       target={"_blank"}
       rel={"noopener, noreferrer"}>
      <section>
        <div className={css(tw`mx-auto max-w-card`)}>
          <div className={order % 2 ? deviceLeft : deviceRight}>
            <Img
              fluid={props.frontmatter.image.childImageSharp.fluid}
              className={screenImage}
            />
          </div>
          <div className={css(tw`p-1x`)}>
            <h2 className={css(tw`text-md leading-2x text-black hover:text-black`)}>
              {props.frontmatter.title}
            </h2>
            <div className={css(tw`text-black hover:text-black`)}
                 dangerouslySetInnerHTML={{ __html: props.html }} />
          </div>
        </div>
      </section>
    </a>
  </li>
)

const PortfolioPage = props => (
  <Layout>
    <figure className={css(tw`relative m-0`)}>
      <Container>
        <ImageContentWrapper>
          <HeroTitle>Portfolio</HeroTitle>
        </ImageContentWrapper>
      </Container>
      <ImageContainer>
        <Image fluid={props.data.hero.fluid} />
      </ImageContainer>
    </figure>
    <Container>
      <TextContainer>
        <Graf>Schaffen Sie sich einen Überblick über unser Schaffen mit dieser breiten Auswahl von Arbeiten.</Graf>
      </TextContainer>
      <div className={css(tw`pt-4x pb-8x`)}>
        <ul className={css(tw`list-reset sm:flex sm:flex-wrap m-0`)}>
          {props.data.allMarkdownRemark.edges.map((edge, i) => (
            <PortfolioCard key={i} props={edge.node} order={i} />
          ))}
        </ul>
      </div>
    </Container>
  </Layout>
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
    hero: imageSharp(fluid: { originalName: { regex: "/hero/" } }) {
      fluid(maxWidth: 1920, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`
