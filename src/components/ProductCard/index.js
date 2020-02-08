import React from 'react'
import { Link } from 'gatsby'

import styled from 'astroturf'

import { CardConverter, CardFooter, CardType, CardWrapper } from '../Card'

const linkStyles = `@apply text-black block opacity-75 relative pb-4x h-full`

const ProductCardSection = styled('section')`
  @apply rounded overflow-hidden p-0;
`

const ProductCardType = styled(CardType)`
  @apply flex justify-between;
`

const ProductCardTitle = styled('h3')`
  @apply m-0 leading-2;
`

const ProductCardGraf = styled('p')`
  @apply pt-0 max-w-hero;
`

const ProductCardColophon = styled('p')`
  @apply m-0 p-1x font-semibold text-right;
`

export default props => (
  <li>
    <Link to={props.link}>
      <ProductCardSection>
        <CardWrapper>
          <ProductCardType>
            <span>{props.type}</span> {props.children}
          </ProductCardType>
          <ProductCardTitle>{props.title}</ProductCardTitle>
        </CardWrapper>
        <CardWrapper>
          <ProductCardGraf>{props.forWhom}</ProductCardGraf>
        </CardWrapper>
        <CardFooter>
          <ProductCardColophon>{props.price}</ProductCardColophon>
          <CardConverter>Mehr</CardConverter>
        </CardFooter>
      </ProductCardSection>
    </Link>
  </li>
)
