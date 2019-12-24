/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { css, jsx } from '@emotion/core'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'

import config from '../../../tailwind.config'
import {
  deviceLeft,
  deviceRight,
  mq,
  screenImage,
  transition,
} from '../../utils/style'
import { CardConverter, CardFooter, CardType, CardWrapper } from '../Card'

const CaseCard = ({ props, first, latest, order }) => (
  <li
    css={[
      first ? firstLi : {},
      !(first || props.latest) ? middleLi : {},
      tw`flex-1 lg:flex-none block text-center sm:text-left sm:w-1/2 lg:w-1/3 xl:w-1/3`,
      latest
        ? latestLi
        : { borderBottom: `1px solid ${config.theme.colors['grey-light']}` },
    ]}
  >
    <Link
      to={`${props.fields.collection}${props.fields.slug}`}
      css={[
        tw`text-black block hover:opacity-75 relative pb-8x h-full`,
        transition,
      ]}
    >
      <div
        css={[
          tw`mx-auto sm:ml-0 sm:flex sm:flex-wrap lg:static`,
          !(first || latest) ? middleContainer : {},
          latest ? latestContainer : { maxWidth: '320px' },
        ]}
      >
        <div css={tw`flex-1`}>
          <CardWrapper>
            <CardType>Fallstudie</CardType>
            <h2 css={tw`m-0 leading-none`}>{props.frontmatter.title}</h2>
          </CardWrapper>
          <div css={order % 2 ? deviceLeft : deviceRight}>
            <Img
              fluid={props.frontmatter.image.childImageSharp.fluid}
              css={screenImage}
            />
          </div>
        </div>
        <CardWrapper css={latest ? latestBlurb : {}}>
          {props.frontmatter.callToAction}
        </CardWrapper>
        <CardFooter>
          <CardConverter>Lesen</CardConverter>
        </CardFooter>
      </div>
    </Link>
  </li>
)

export default CaseCard

const firstLi = {
  [mq[0]]: {
    borderRight: `1px solid ${config.theme.colors['grey-light']}`,
  },
  [mq[2]]: {
    width: 'calc(33.333333% - ((33.333333% - 320px) / 4))',
  },
}

const middleLi = {
  [mq[0]]: {
    textAlign: 'right',
  },
  [mq[2]]: {
    textAlign: 'center',
    borderRight: `1px solid ${config.theme.colors['grey-light']}`,
    width: 'calc(33.333333% + ((33.333333% - 320px) / 2))',
  },
}

const latestLi = {
  [mq[0]]: {
    paddingBottom: '0.75rem',
  },
  [mq[2]]: {
    paddingBottom: '0',
    width: 'calc(33.333333% - ((33.333333% - 320px) / 4))',
    borderRight: 'none',
  },
}

const middleContainer = {
  [mq[0]]: {
    marginRight: '0',
    marginLeft: 'auto',
  },
  [mq[2]]: {
    marginRight: 'auto',
  },
}

const latestContainer = {
  maxWidth: '320px',
  [mq[0]]: {
    maxWidth: '640px',
  },
  [mq[2]]: {
    textAlign: 'right',
    maxWidth: '320px',
    marginRight: '0',
    marginLeft: 'auto',
  },
}

const latestBlurb = {
  [mq[0]]: {
    maxWidth: '320px',
    marginTop: '3.75rem',
    marginLeft: '48px', // magic number to evade screen gfx
  },
  [mq[2]]: {
    maxWidth: 'auto',
    marginTop: '0',
    marginLeft: '0',
  },
}
