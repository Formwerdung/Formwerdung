import React from 'react'
import { css } from 'emotion'
import tw from 'tailwind.macro'

import './global.css'
import Banner from '../Banner'
import Contact from '../Contact'
import Colophon from '../Colophon'

const Layout = ({ children }) => (
  <div className={css(tw`font-sans`)}>
    <Banner />
    <main className={css(tw`shadow relative pb-8x`)}>
      <div className={css(tw`my-3x`)}>{children}</div>
      <Contact />
    </main>
    <Colophon />
  </div>
)

export default Layout
