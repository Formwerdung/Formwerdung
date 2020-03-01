import React, { FunctionComponent } from 'react'
import { Link, GatsbyLinkProps } from 'gatsby'
import { Box } from '..'

export const Card: FunctionComponent<GatsbyLinkProps<null>> = ({
  children,
  to,
  ...rest
}) => {
  console.log(to)
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
    return (
      <Box
        as="article"
        css={`
          @apply shadow-lg bg-white;
        `}
      >
        {children}
      </Box>
    )
  }
}
