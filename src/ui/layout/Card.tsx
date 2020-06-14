import React, { FunctionComponent } from 'react'
import { Link, GatsbyLinkProps } from 'gatsby'
import { Box } from '..'
import styled from 'astroturf'

interface CardProps extends Omit<GatsbyLinkProps<null>, 'to'> {
  to?: string
  mode?: 'default' | 'dark'
}

export const Card: FunctionComponent<CardProps> = ({
  children,
  to,
  mode,
  ...rest
}) => {
  if (to) {
    return (
      <Link
        to={to}
        css={`
          @apply block shadow-lg bg-white transition duration-150 ease-in-out transform;

          &:hover {
            @apply shadow-xl -translate-y-1;
          }
        `}
        {...(rest as any)}
      >
        <Box as="article">{children}</Box>
      </Link>
    )
  } else {
    return mode === 'dark' ? (
      <Box
        as="article"
        css={`
          @apply shadow-lg bg-gray-200 w-medium flex-shrink-0;
        `}
      >
        {children}
      </Box>
    ) : (
      <Box
        as="article"
        css={`
          @apply shadow-lg bg-white w-medium flex-shrink-0;
        `}
      >
        {children}
      </Box>
    )
  }
}
