import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { css } from 'emotion'
import tw from 'tailwind.macro'

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
    className={css(
      tw`my-auto flex-shrink max-w-tab sm:max-w-reset overflow-hidden`
    )}
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
      className={css(
        tw`no-underline text-white hover:text-blue p-1x rounded rounded-bl-none rounded-br-none block`,
        offerNavItemStyle,
        transition,
      )}
    >
      {props.children}
    </Link>
  </li>
)

export default () => (
  <StaticQuery
    query={graphql`
      {
        image: imageSharp(fluid: { originalName: { regex: "/schwarz1/" } }) {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    `}
    render={data => (
      <div className={css(tw`relative`)}>
        <nav className={css(tw`h-full relative z-10`)}>
          <Container>
            <ul
              className={css(
                tw`list-reset m-0 flex h-full justify-start pt-8x sm:pt-10x xl:pt-12x px-1x`
              )}
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
          className={css(
            tw`absolute pin-t w-full h-full shadow-inner bg-black-transparent`
          )}
        >
          <Image fluid={data.image.fluid} />
        </div>
      </div>
    )}
  />
)
