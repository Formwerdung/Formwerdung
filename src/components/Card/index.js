/** @jsx jsx */
import * as React from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import tw from 'tailwind.macro'

import config from '../../../tailwind.config'
import { ArrowRightCircle } from 'react-feather'
import { borderLeft, transition } from '../../utils/style'

export const CardFooter = styled('div')`
  ${tw`w-full flex justify-end bottom-0 left-0 absolute`},;
`

export const CardType = styled('p')`
  ${tw`pt-0`};
`

export const CardWrapper = styled('div')`
  ${tw`p-1x`};
`

export const CardConverter = ({ children }) => (
  <CardWrapper css={[tw`block flex`, borderLeft]}>
    <span
      css={[
        tw`pr-half`,
        `a:hover & { color: ${config.theme.colors['blue']} }`
      ]}
    >
      {children}
    </span>
    <ArrowRightCircle
      css={[
        tw`h-2x stroke-current hover:text-blue relative z-10`,
        `a:hover & { color: ${config.theme.colors['blue']} }`,
        transition
      ]}
    />
  </CardWrapper>
)
