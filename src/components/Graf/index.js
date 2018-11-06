import React from 'react'
import { css } from 'emotion'
import tw from 'tailwind.macro'

export default ({ children }) => <p className={css(tw`pb-1x m-0`)}>{children}</p>
