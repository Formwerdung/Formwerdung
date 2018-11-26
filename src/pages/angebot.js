import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import tw from 'tailwind.macro'

import Container from '../components/Container'
import Layout from '../components/Layout'
import OfferNav from '../components/OfferNav'
import { Graf, SubTitle } from '../components/Type'
import { Timeline } from '../components/Timeline'

export const OfferText = styled('section')`
  ${tw`px-2x md:w-3/5 xl:w-1/2`};
`

export const OfferTitle = styled('h1')`
  ${tw`pt-1x md:pt-2 pb-1x m-0 leading-3x text-3xl`};
`

export const OfferCards = styled('section')`
  ${tw`py-4x px-1x lg:w-4/5 lg:ml-1/5 xl:w-3/5 xl:ml-2/5`};
`

export default () => (
  <Layout>
    <div className={css(tw`relative`)}>
      <OfferNav />
      <Container>
        <OfferText>
          <OfferTitle>
            Angebot
          </OfferTitle>
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
          <SubTitle className={css(tw`sm:text-center`)}>Dienste</SubTitle>
          <Timeline>
            <section>
              <h3>
                Content-Strategien
              </h3>
              <div>
                Wir machen ausführliche Empfehlungen für Ihre Inhalte, um Ihre Ziele zu erreichen.
              </div>
            </section>
            <section>
              <h3>
                SEO-Konzepte
              </h3>
              <div>
                Wir erstellen detaillierte Konzepte, um ihre Seite für Suchmaschinen fit zu machen.
              </div>
            </section>
            <section>
              <h3>
                Design-Umsetzung
              </h3>
              <div>
                Wir bauen die Designs Ihrer Grafiker mit optimalen, individuell ausgewählten Technologien.
              </div>
            </section>
            <section>
              <h3>
                Web-Apps
              </h3>
              <div>
                Wir designen und entwickeln komplexe Applikationen basierend auf ihren APIs und Backends.
              </div>
            </section>
            <section>
              <h3>
                Maintenance
              </h3>
              <div>
                Wir pflegen und bieten ihre Webseite im Rahmen von individuellen Service-Level-Agreements.
              </div>
            </section>
          </Timeline>
        </OfferCards>
      </Container>
    </div>
  </Layout>
)
