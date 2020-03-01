import { css } from 'astroturf'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React, { FunctionComponent } from 'react'

import { ImageSharpFluid } from '../../../graphql-types'
import { screenImage } from '../../utils/style'
import { CardConverter, CardFooter, CardType, CardWrapper } from '../Card'

export interface CaseStudy {
  url: string
  title: string
  callToAction: string
  fluidImage: ImageSharpFluid
}

interface Props {
  caseStudy: CaseStudy
  first: boolean
  latest: boolean
  order: number
}

const CaseCard: FunctionComponent<Props> = ({
  caseStudy: beep,
  first,
  latest,
  order,
}) => (
  <li>
    <Link
      to={beep.url}
      css={css`
        @apply text-black block opacity-75 relative pb-8x h-full;
      `}
    >
      <div
        css={css`
          @apply mx-auto ml-0 flex flex-wrap static;
        `}
      >
        <div
          css={css`
            @apply flex-1;
          `}
        >
          <CardWrapper>
            <CardType>Fallstudie</CardType>
            <h2
              css={css`
                @apply m-0 leading-none;
              `}
            >
              {beep.title}
            </h2>
          </CardWrapper>
          <div>
            <Img fluid={beep.fluidImage as any} css={screenImage} />
          </div>
        </div>
        <CardWrapper>{beep.callToAction}</CardWrapper>
        <CardFooter>
          <CardConverter>Lesen</CardConverter>
        </CardFooter>
      </div>
    </Link>
  </li>
)

export default CaseCard
