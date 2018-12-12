import React from 'react'
import { css } from 'emotion'
import tw from 'tailwind.macro'
import { ChevronsDown } from 'react-feather'

export default props => (
  <div className={css(tw`mx-1 sm:w-1/2 lg:w-1/3`)}>
    <section
      className={css(tw`rounded border border-grey border-solid  p-1x`, {
        opacity: props.disabled ? '0.5' : '1',
      })}
    >
      <h3 className={css(tw`m-0 text-sm leading-2x text-center`)}>
        {props.title}
      </h3>
      <div className={css(tw`text-sm leading-2x text-center`)}>
        {props.description}
      </div>
    </section>
    <div>
      <ChevronsDown
        className={css(
          tw`mx-auto block w-4x h-4x p-1x stroke-current text-grey`
        )}
      />
    </div>
  </div>
)
