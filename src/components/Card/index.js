// @flow
import * as React from 'react'
import styled from 'react-emotion'
import { css } from 'emotion'
import tw from 'tailwind.macro'

import config from '../../../tailwind'
import { ArrowRightCircle } from 'react-feather'
import { borderLeft, transition } from '../../utils/style'

export const CardFooter = styled('div')`
  ${tw`w-full flex justify-end pin-b pin-l absolute`},;
`

export const CardType = styled('p')`
  ${tw`pt-0`};
`

export const CardWrapper = styled('div')`
  ${tw`p-1x`};
`

type Props = {
  children?: React.Node,
}

export const CardConverter = ({ children }: Props) => (
  <CardWrapper className={css(tw`block flex`, borderLeft)}>
    <span
      className={css(
        tw`pr-half`,
        `a:hover & { color: ${config.colors['blue']} }`
      )}
    >
      {children}
    </span>
    <ArrowRightCircle
      className={css(
        tw`h-2x stroke-current hover:text-blue relative z-10`,
        `a:hover & { color: ${config.colors['blue']} }`,
        transition
      )}
    />
  </CardWrapper>
)
