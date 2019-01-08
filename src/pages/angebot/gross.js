import React from 'react'
import { css } from 'emotion'
import tw from 'tailwind.macro'

import Container from '../../components/Container'
import Layout from '../../components/Layout'
import OfferNav from '../../components/OfferNav'
import { OfferCards, OfferText, OfferTitle } from '../angebot'
import { Graf, SubTitle } from '../../components/Type'
import { Timeline } from '../../components/Timeline'
import SEO from '../../components/SEO'

export default () => (
  <Layout>
    <SEO title={'Bundle: Magazine | Formwerdung | Web Design aus der Schweiz'}
         description={'Magazine - Unser Bundle für eine Vielzahl von Anwendungen im Bereich Blogs, Online-Journalismus und anderen Syndicated Content.'} />
    <div className={css(tw`relative`)}>
      <OfferNav />
      <Container>
        <OfferText>
          <OfferTitle>Magazine</OfferTitle>
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
          <SubTitle className={css(tw`text-center`)}>Dienste</SubTitle>
          <Timeline>
            <section>
              <h3>Content-Strategien</h3>
              <div>
                Wir machen ausführliche Empfehlungen für Ihre Inhalte, um Ihre
                Ziele zu erreichen.
              </div>
            </section>
            <section>
              <h3>SEO-Konzepte</h3>
              <div>
                Wir erstellen detaillierte Konzepte, um ihre Seite für
                Suchmaschinen fit zu machen.
              </div>
            </section>
            <section>
              <h3>Design-Umsetzung</h3>
              <div>
                Wir bauen die Designs Ihrer Grafiker mit optimalen, individuell
                ausgewählten Technologien.
              </div>
            </section>
            <section>
              <h3>Web-Apps</h3>
              <div>
                Wir designen und entwickeln komplexe Applikationen basierend auf
                ihren APIs und Backends.
              </div>
            </section>
            <section>
              <h3>Maintenance</h3>
              <div>
                Wir pflegen und bieten ihre Webseite im Rahmen von individuellen
                Service-Level-Agreements.
              </div>
            </section>
          </Timeline>
        </OfferCards>
      </Container>
    </div>
  </Layout>
)
