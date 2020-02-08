import styled from 'astroturf'
import * as React from 'react'
import { ArrowRightCircle } from 'react-feather'

export const CardFooter = styled('div')`
  @apply w-full flex justify-end bottom-0 left-0 absolute;
`

export const CardType = styled('p')`
  @apply pt-0;
`

export const CardWrapper = styled('div')`
  @apply p-1x;
`

export const CardConverter = ({ children }) => (
  <CardWrapper>
    <span>{children}</span>
    <ArrowRightCircle />
  </CardWrapper>
)
