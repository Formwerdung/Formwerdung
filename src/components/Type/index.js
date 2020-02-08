import React from 'react'
import styled, { css } from 'astroturf'

export const Heading1 = styled('h1')`
  @apply pb-1x m-0;
`

export const SubTitle = styled('h1')`
  @apply pb-1x m-0;
`

export const TextContainer = styled('h1')`
  @apply pb-1x m-0;
`

export const Graf = ({ children }) => (
  <p
    css={css`
      @apply pb-1x m-0;
    `}
  >
    {children}
  </p>
)
