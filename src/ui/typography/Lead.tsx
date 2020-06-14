import React from 'react'

export const Lead = ({ children }) => {
  return (
    <p
      css={`
        @apply font-sans text-white text-lg leading-6 m-0 tracking-wider;

        &:before {
          content: '';
          margin-top: -0.3rem;
          height: 0;
          display: block;
        }
      `}
    >
      {children}
    </p>
  )
}
