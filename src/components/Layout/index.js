import React from 'react'
import { css } from 'emotion'
import tw from 'tailwind.macro'

import './global.css'
import Banner from '../Banner'
import Contact from '../Contact'
import Colophon from '../Colophon'
import { Helmet } from 'react-helmet'

const Layout = ({ children }) => (
  <div className={css(tw`font-sans bg-white`)}>
    <Helmet>
      
    </Helmet>
    <Banner />
    <main className={css(tw` relative pb-8x`)}>
      <div className={css(tw`my-3x`)}>{children}</div>
      <Contact />
    </main>
    <Colophon />
  </div>
)

export default Layout
