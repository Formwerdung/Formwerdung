import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'
import styled from 'react-emotion'
import tw from 'tailwind.macro'

import { mq } from '../../utils/style'
import { CardConverter, CardFooter, CardType, CardWrapper } from '../Card'

const listItemStyles = tw`sm:w-1/2 lg:w-1/3 border-grey-light border-solid border-t border-r-0 border-l-0 border-b-0 sm:border-r`

const evenStyling = {
  [mq[0]]: {
    'border-right-width': '0',
  },
}

const secondStyling = {
  [mq[1]]: {
    'border-right-width': '1px',
  },
}

const thirdStyling = {
  [mq[1]]: {
    'border-right-width': '0',
  },
}

const fourthStyling = {
  [mq[2]]: {
    flex: '1',
  },
}

const fourthStylingSection = {
  [mq[2]]: {
    width: '33.3333333%',
  },
}

const linkStyles = tw`text-black block hover:opacity-75 transition relative pb-4x h-full`

const ProductCardSection = styled('section')`
  ${tw`md:rounded overflow-hidden p-0`};
`

const ProductCardType = styled(CardType)`
  ${tw`flex justify-between`};
`

const ProductCardTitle = styled('h3')`
  ${tw`m-0 leading-2`};
`

const ProductCardGraf = styled('p')`
  ${tw`pt-0 max-w-hero`};
`

const ProductCardColophon = styled('p')`
  ${tw`m-0 p-1x font-semibold text-right`};
`

export default props => (
  <li
    className={css(
      listItemStyles,
      props.index === 'even' ? evenStyling : {},
      props.number === 'second' ? secondStyling : {},
      props.number === 'third' ? thirdStyling : {},
      props.number === 'fourth' ? fourthStyling : {}
    )}
  >
    <Link
      to={props.link}
      className={css(
        linkStyles,
        props.number === 'fourth' ? fourthStylingSection : {}
      )}
    >
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
          <CardConverter>Mehr dazu</CardConverter>
        </CardFooter>
      </ProductCardSection>
    </Link>
  </li>
)
