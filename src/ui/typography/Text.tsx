import React, { FunctionComponent } from 'react'

export const Text: FunctionComponent = ({ children }) => {
  return (
    <p
      css={`
        @apply leading-6 mb-0 text-black;
      `}
    >
      {children}
    </p>
  )
}
