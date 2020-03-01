import React, { FunctionComponent } from 'react'
import styled from 'astroturf'

interface HeadingProps {
  component?: 'h1' | 'h2' | 'h3'
  level?: 1 | 2
  mode?: 'light' | 'dark'
}

const HeadingBase = styled('h1')`
  &.level-1 {
    @apply text-3xl font-bold leading-9;
  }

  &.level-2 {
    @apply text-xl font-bold leading-6;
  }

  &.mode-light {
    @apply text-black;
  }

  &.mode-dark {
    @apply text-white;
  }
`

export const Heading: FunctionComponent<HeadingProps> = ({
  children,
  component,
  level = 1,
  mode = 'light',
}) => {
  return (
    <HeadingBase as={component} level={level} mode={mode}>
      {children}
    </HeadingBase>
  )
}
