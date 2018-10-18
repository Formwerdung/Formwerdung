import React from 'react'
import { css } from 'emotion'
import tw from 'tailwind.macro'

export default ({ children }) => <p className={css(tw`pb-1 m-0`)}>{children}</p>
