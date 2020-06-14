import React, { FunctionComponent } from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'

import { Imposter, ImposterWrapper, Nav, NavItem, Heading, Lead } from '../ui'
import BannerLogoSmall from './Logo'
import { Link } from 'gatsby'

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
              @apply w-0 h-0 absolute z-1;

              content: '';
              border-bottom: 4.5rem solid #f7fafc;
              border-right: 50vw solid transparent;
              width: 0;
              height: 0;
              position: absolute;
              z-index: 1;
              bottom: -1px;
              left: 0;
            }

            &:after {
              content: '';
              width: 0;
              height: 0;
              border-bottom: 4.5rem solid #f7fafc;
              border-left: 50vw solid transparent;
              position: absolute;
              z-index: 1;
              bottom: -1px;
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
            @apply flex justify-between items-start flex-wrap;
          `}
        >
          <Link
            to="/"
            css={`
              flex: 0 0 7rem;

              @apply p-px mt-6 ml-6 mr-6 bg-white shadow-lg;
            `}
          >
            <BannerLogoSmall />
          </Link>
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
