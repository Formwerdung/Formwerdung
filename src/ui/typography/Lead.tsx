import React from 'react'

export const Lead = ({ children }) => {
  return (
    <p
      css={`
        @apply text-white text-xl leading-6 m-0;
      `}
    >
      {children}
    </p>
  )
}
