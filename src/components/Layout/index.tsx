/** @jsx jsx */
import React, { FunctionComponent } from 'react'
import { css, jsx } from '@emotion/core'
import tw from 'tailwind.macro'

import './global.css'
import Banner from '../Banner/Banner'
import Colophon from '../Colophon'

const Layout: FunctionComponent = ({ children }) => (
  <div css={tw`font-sans bg-white`}>
    <Banner />
    <main css={tw`relative pb-8x`}>{children}</main>
    <Colophon />
  </div>
)

export default Layout
