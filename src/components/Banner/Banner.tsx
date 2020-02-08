import styled, { css } from 'astroturf'
import { Link } from 'gatsby'
import React from 'react'

import Container from '../Container'
import { Nav } from '../Nav'
import { BannerLogoSmall } from './BannerLogoSmall'
import BannerNavItem from './BannerNavItem'

const Banner = styled('header')`
  @apply w-full absolute top-0 z-20;
`
const BannerWrapper = styled('div')`
  @apply h-full flex justify-between px-1x;
`

export default () => (
  <Banner>
    <Container>
      <BannerWrapper>
        <Link
          to={'/'}
          css={css`
            @apply block my-1x bg-white shadow-lg p-px;
          `}
        >
          <div
            css={css`
              @apply h-6x;
            `}
          >
            <BannerLogoSmall />
          </div>
        </Link>
        <Nav>
          <BannerNavItem to="/angebot">Angebot</BannerNavItem>
          <BannerNavItem to="/portfolio">Portfolio</BannerNavItem>
          <BannerNavItem to="/blog">Blog</BannerNavItem>
          <li>
            <Link
              to="/kontakt"
              css={css`
                @apply text-black text-blue no-underline transition block relative h-8x overflow-hidden shadow-2xl;
              `}
            >
              <div
                css={css`
                  @apply leading-3x bg-white px-1x shadow-2xl;
                `}
              >
                Kontakt
              </div>
              <div
                css={css`
                  @apply absolute left-0 w-0 h-0 shadow-2xl;
                `}
                style={{
                  borderStyle: 'solid',
                  borderWidth: '0.75rem 43px 0 43px',
                  borderColor: 'white transparent transparent transparent',
                }}
              ></div>
            </Link>
          </li>
        </Nav>
      </BannerWrapper>
    </Container>
  </Banner>
)
