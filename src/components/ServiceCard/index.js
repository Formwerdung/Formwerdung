import React from 'react'

import { ChevronsDown } from 'react-feather'

export default props => (
  <div
    css={`
      @apply mx-1 w-1/2 w-1/3;
    `}
  >
    <section
      css={[
        `@apply rounded border border-grey border-solid  p-1x`,
        { opacity: props.disabled ? '0.5' : '1' },
      ]}
    >
      <h3
        css={`
          @apply m-0 text-sm leading-2x text-center;
        `}
      >
        {props.title}
      </h3>
      <div
        css={`
          @apply text-sm leading-2x text-center;
        `}
      >
        {props.description}
      </div>
    </section>
    <div>
      <ChevronsDown
        css={`
          @apply mx-auto block w-4x h-4x p-1x stroke-current text-grey;
        `}
      />
    </div>
  </div>
)
