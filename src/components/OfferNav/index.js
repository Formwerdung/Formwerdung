import { jsx } from '@emotion/core'
import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'

import Container from '../Container'
import { Image } from '../Images'
import { transition } from '../../utils/style'

const offerNavItemStyle = {
  'text-shadow': '0 4px 4px rgba(0,0,0,0.5)',
  'text-overflow': 'ellipsis',
  'white-space': 'nowrap',
  overflow: 'hidden',
}

const OfferNavItem = props => (
  <li
    css={`
      @apply my-auto flex-shrink max-w-tab overflow-hidden;
    `}
  >
    <Link
      to={props.to}
      activeStyle={{
        color: '#080401',
        background: '#fffefc',
        position: 'relative',
        zIndex: '10',
        boxShadow: '0 -2px 2px 0 rgba(0,0,0,0.10)',
        textShadow: 'none',
      }}
      exact={props.exact}
      css={[
        `@apply no-underline text-white text-blue p-1x rounded rounded-bl-none rounded-br-none block`,
        offerNavItemStyle,
        transition,
      ]}
    >
      {props.children}
    </Link>
  </li>
)

export default () => (
  <StaticQuery
    query={graphql`
      {
        image: imageSharp(fluid: { originalName: { regex: "/offer-main/" } }) {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    `}
    render={data => (
      <div
        css={`
          @apply relative;
        `}
      >
        <nav
          css={`
            @apply h-full relative z-10;
          `}
        >
          <Container>
            <ul
              css={`
                @apply m-0 flex h-full justify-start pt-8x px-1x;

                @screen sm {
                  @apply pt-10x;
                }

                @screen xl {
                  @apply pt-12x;
                }
              `}
            >
              <OfferNavItem exact={'true'} to={'/angebot/'}>
                Übersicht
              </OfferNavItem>
              <OfferNavItem to={'/angebot/klein/'}>Amplify</OfferNavItem>
              <OfferNavItem to={'/angebot/gross/'}>Magazine</OfferNavItem>
              <OfferNavItem to={'/angebot/hosting/'}>Hosting</OfferNavItem>
            </ul>
          </Container>
        </nav>
        <div
          css={`
            @apply absolute top-0 w-full h-full shadow-inner bg-black-transparent;
          `}
        >
          <Image fluid={data.image.fluid} />
        </div>
      </div>
    )}
  />
)
