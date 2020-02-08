import React, { FunctionComponent } from 'react'

import './global.css'
import Banner from '../Banner/Banner'
import Colophon from '../Colophon'

const Layout: FunctionComponent = ({ children }) => (
  <div
    css={`
      @apply font-sans bg-white;
    `}
  >
    <Banner />
    <main
      css={`
        @apply relative pb-8x;
      `}
    >
      {children}
    </main>
    <Colophon />
  </div>
)

export default Layout
