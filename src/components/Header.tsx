import React, { FunctionComponent } from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'

import { Imposter, ImposterWrapper, Nav, NavItem, Heading, Lead } from '../ui'
import BannerLogoSmall from './Banner/BannerLogoSmall'

interface HeaderProps {
  headerImage: FluidObject
}

export const Header: FunctionComponent<HeaderProps> = ({
  children,
  headerImage,
}) => {
  return (
    <ImposterWrapper>
      <Imposter variant="full">
        <div
          css={`
            &:before {
              content: '';
              border-bottom: 10vw solid #cbd5e0;
              border-right: 50vw solid transparent;
              width: 0;
              height: 0;
              position: absolute;
              z-index: 1;
              bottom: 0;
              left: 0;
            }

            &:after {
              content: '';
              width: 0;
              height: 0;
              border-bottom: 10vw solid #cbd5e0;
              border-left: 50vw solid transparent;
              position: absolute;
              z-index: 1;
              bottom: 0;
              left: 50vw;
            }

            > div {
              height: 20rem;
              position: static !important;
            }
          `}
        >
          <GatsbyImage fluid={headerImage} />
        </div>
      </Imposter>
      <div className="z-1 relative">
        <div
          css={`
            @apply flex justify-between items-start;
          `}
        >
          <div
            css={`
              flex: 0 0 7rem;

              @apply p-px mt-6 ml-6 mr-6 bg-white shadow-lg;
            `}
          >
            <BannerLogoSmall />
          </div>
          <div
            css={`
              @apply mt-6 mr-6 ml-6;
            `}
          >
            <Nav>
              <NavItem to="/services">Services</NavItem>
              <NavItem to="/portfolio">Portfolio</NavItem>
              <NavItem to="/blog">Blog</NavItem>
              <NavItem to="/contact">Contact</NavItem>
            </Nav>
          </div>
        </div>
        {children}
      </div>
    </ImposterWrapper>
  )
}
