import React from 'react'
import styled, { css } from 'astroturf'

import Container from '../components/Container'
import Layout from '../components/Layout'
import OfferNav from '../components/OfferNav'
import SEO from '../components/SEO'
import { Graf, SubTitle } from '../components/Type'

export const OfferText = styled('section')`
  @apply px-2x w-3/5 w-1/2;
`

export const OfferTitle = styled('h1')`
  @apply pt-1x pt-2 pb-1x m-0 leading-3x text-3xl;
`

export const OfferCards = styled('section')`
  @apply py-4x px-1x w-4/5 ml-1/5 w-3/5 ml-2/5;
`

export default () => (
  <Layout>
    <SEO
      title={'Angebot | Formwerdung | Web Design aus der Schweiz'}
      description={
        'Eine Übersicht über unsere Services. Formwerdung bietet alle Dienstleistungen im Bereich Web an, die für die technische Umsetzung relevant sind.'
      }
    />
    <div
      css={css`
        @apply relative;
      `}
    >
      <OfferNav />
      <Container>
        <OfferText>
          <OfferTitle>Angebot</OfferTitle>
          <Graf>
            Hier finden sie eine Übersicht über unsere Services. Formwerdung
            bietet alle Dienstleistungen im Bereich Web an, die für die
            technische Umsetzung relevant sind. Dazu gehören inhaltliche
            Konzepte (inklusive Optimierung für Suchmaschinen), Design und
            Programmierung.
          </Graf>
          <Graf>
            Gerne bieten wir unsere Leistungen auch modular an. Auf der Basis
            eines unverbindlichen persönlichen Gesprächs können wir Ihnen
            detaillierte Offerten für volle Kostenkontrolle bieten.
          </Graf>
          <Graf>
            Wir Für diese und weitere Services arbeiten wir gerne mit unserem
            breiten Netzwerk von Partnern zusammen.
          </Graf>
        </OfferText>
        <OfferCards>
          <SubTitle
            css={css`
              @apply text-center;
            `}
          >
            Dienste
          </SubTitle>
        </OfferCards>
      </Container>
    </div>
  </Layout>
)
