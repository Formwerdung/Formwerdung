import React from 'react'

import { Card, Stack, Heading, Text } from '../src/ui'

export default {
  title: 'Cards',
}

export const defaultHeader = () => (
  <header
    css={`
      @apply bg-black p-10;
    `}
  >
    <Stack>
      <h1
        css={`
          line-height: 2.25rem;
          max-width: 25ch;
          @apply text-white font-bold text-3xl;
        `}
      >
        Formwerdung ist Performance
      </h1>
      <p
        css={`
          font-size: 1.25rem;

          @apply text-white;
        `}
      >
        Formwerdung gestaltet und entwickelt exklusiv Webseiten und –apps. Wir
        sind auf responsive Design spezialisiert, das auch bei komplexen
        Interfaces keine Abstriche machen muss.
      </p>
    </Stack>
  </header>
)

export const defaultCard = () => (
  <Card>
    <Stack>
      <Heading>Card Title</Heading>
      <Text>Some text on a card I guess</Text>
    </Stack>
  </Card>
)

export const cardGrid = () => (
  <div
    css={`
      @apply flex flex-wrap -mr-6;
    `}
  >
    <Card>
      <Stack>
        <Heading>Card Title</Heading>
        <Text>Some text on a card I guess</Text>
      </Stack>
    </Card>
    <Card>
      <Stack>
        <Heading>Card Title</Heading>
        <Text>Some text on a card I guess</Text>
      </Stack>
    </Card>
    <Card>
      <Stack>
        <Heading>Card Title</Heading>
        <Text>Some text on a card I guess</Text>
      </Stack>
    </Card>
    <Card>
      <Stack>
        <Heading>Card Title</Heading>
        <Text>Some text on a card I guess</Text>
      </Stack>
    </Card>
    <Card>
      <Stack>
        <Heading>Card Title</Heading>
        <Text>Some text on a card I guess</Text>
      </Stack>
    </Card>
  </div>
)
