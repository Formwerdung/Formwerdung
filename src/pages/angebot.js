import React from 'react'
import { css } from 'emotion'
import tw from 'tailwind.macro'

import Container from '../components/Container'
import Layout from '../components/Layout'
import OfferNav from '../components/OfferNav'
import { Graf, SubTitle } from '../components/Type'
import { Timeline } from '../components/Timeline'

export default () => (
  <Layout>
    <div className={css(tw`relative`)}>
      <OfferNav />
      <Container>
        <div>
          <div className={css(tw`px-1x md:w-3/5 xl:w-1/2 bg-white`)}>
            <h1 className={css(tw`pt-1x md:pt-2 pb-1x m-0 leading-3x`)}>
              Angebot
            </h1>
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
          </div>

          <section className={css(tw`px-1x`)}>
            <SubTitle>Dienste</SubTitle>
            <Timeline>
              <section>
                <h3>
                  Kontaktaufnahme
                </h3>
                <div>
                  Nehmen Sie mit uns Kontakt auf, um ein unverbindliches Treffen zu vereinbaren.
                </div>
              </section>
              <section>
                <h3>
                  Kontaktaufnahme
                </h3>
                <div>
                  Nehmen Sie mit uns Kontakt auf, um ein unverbindliches Treffen zu vereinbaren.
                </div>
              </section>
            </Timeline>
          </section>
        </div>
      </Container>
    </div>
  </Layout>
)
