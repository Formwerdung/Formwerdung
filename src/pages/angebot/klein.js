import { css } from '@emotion/core'
import React from 'react'

import Container from '../../components/Container'
import Layout from '../../components/Layout'
import OfferNav from '../../components/OfferNav'
import SEO from '../../components/SEO'
import { Graf, SubTitle } from '../../components/Type'
import { OfferCards, OfferText, OfferTitle } from '../angebot'

export default () => (
  <Layout>
    <SEO
      title={'Bundle: Amplify | Formwerdung | Web Design aus der Schweiz'}
      description={
        'Amplify - Unser Bundle für den schnellen Start zum Beispiel für Events, Restaurants, Startups, Kampagnen und Portfolios.'
      }
    />
    <div
      css={`
        @apply relative;
      `}
    >
      <OfferNav />
      <Container>
        <OfferText>
          <OfferTitle
            css={`
              @apply pt-1x pt-2 pb-1x m-0 leading-3x;
            `}
          >
            Amplify
          </OfferTitle>
          <Graf>
            Ein Paket für klare und zielgerichtete Kommunikation. Hier sind nur
            die Features dabei, die man wirklich braucht: Einige wenige Seiten,
            auf denen man sich und sein Produkt vorstellen und Kontaktdaten
            hinterlassen kann.
          </Graf>
          <Graf>
            Dazu kommen eine flexible Anzahl von Beiträgen. Beiträge sind
            Inhalte ein bisschen wie Blogeinträge, aber speziell den
            Bedürfnissen des Kunden angepasst, wodurch sie extrem flexibel
            eingesetzt werden können. Ein Startup kann diese zum Beispiel für
            Produkte nutzen und kann so jederzeit ein angepasstes Angebot
            kommunizieren. Ein Restaurant kann stets sein aktuelles Menü
            präsentieren (Beiträge wären hier einzelne Gerichte), ein_e
            Künstler_in neue Werke ins Showcase aufnehmen.
          </Graf>
          <Graf>
            Dieses Angebot ist aber auch der optimale erste Trittstein für
            grössere Aufgaben. Die geringe Entwicklungszeit ermöglicht es,
            extrem einen ersten Eindruck zu vermitteln (auch grossartig für
            zeitlich begrenzte Kampagnen). Seiten <em>under construction</em>{' '}
            gehören so der Vergangenheit an. Zudem können die verwendeten
            Technologien mühelos für komplexeste Webapps verwendet werden. So
            ist ein sukzessiver Aufbau möglich, was die Entwicklung von Apps
            äusserst kostengünstig macht.
          </Graf>
        </OfferText>
        <OfferCards>
          <SubTitle
            css={`
              @apply text-center;
            `}
          >
            Ablauf
          </SubTitle>
        </OfferCards>
      </Container>
    </div>
  </Layout>
)
