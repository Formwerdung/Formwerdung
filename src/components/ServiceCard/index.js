/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import tw from 'tailwind.macro'
import { ChevronsDown } from 'react-feather'

export default props => (
  <div css={tw`mx-1 sm:w-1/2 lg:w-1/3`}>
    <section
      css={[
        tw`rounded border border-grey border-solid  p-1x`,
        { opacity: props.disabled ? '0.5' : '1' }
      ]}
    >
      <h3 css={tw`m-0 text-sm leading-2x text-center`}>
        {props.title}
      </h3>
      <div css={tw`text-sm leading-2x text-center`}>
        {props.description}
      </div>
    </section>
    <div>
      <ChevronsDown
        css={tw`mx-auto block w-4x h-4x p-1x stroke-current text-grey`}
      />
    </div>
  </div>
)
