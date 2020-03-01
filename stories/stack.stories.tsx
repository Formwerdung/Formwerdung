import React from 'react'

import { Stack } from '../src/ui'

export default {
  title: 'Stack',
}

const SquareVertical = () => (
  <div
    css={`
      @apply bg-blue-500 w-full h-8;
    `}
  />
)

const SquareHorizontal = () => (
  <div
    css={`
      @apply bg-blue-500 w-8 h-full;
    `}
  />
)

export const defaultStack = () => (
  <Stack>
    <SquareVertical />
    <SquareVertical />
    <SquareVertical />
  </Stack>
)

export const smallStack = () => (
  <Stack size="small">
    <SquareVertical />
    <SquareVertical />
    <SquareVertical />
  </Stack>
)

export const horizontalStack = () => (
  <Stack orientation="horizontal">
    <p>The sacred world</p>
    <p>The holy texts</p>
    <p>Bad feelings</p>
  </Stack>
)
