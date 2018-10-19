import React from 'react'
import { css } from 'emotion'
import tw from 'tailwind.macro'

import Container from '../../components/Container'
import Layout from '../../components/Layout'
import OfferNav from '../../components/OfferNav'

export default () => (
  <Layout>
    <div className={css(tw`relative`)}>
      <OfferNav />
      <Container>
        <div className={css(tw`px-1`)}>Hosting</div>
      </Container>
    </div>
  </Layout>
)
