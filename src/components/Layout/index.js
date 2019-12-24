/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'

import './global.css'
import Banner from '../Banner'
import Contact from '../Contact'
import Colophon from '../Colophon'

const Layout = ({ children }) => (
  <div css={tw`font-sans bg-white`}>
    <Banner />
    <main css={tw`relative pb-8x`}>
      <div css={tw`my-3x`}>{children}</div>
      <Contact />
    </main>
    <Colophon />
  </div>
)

export default Layout
