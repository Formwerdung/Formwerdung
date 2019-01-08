import React from 'react'
import { css } from 'emotion'
import tw from 'tailwind.macro'

import Container from '../../components/Container'
import Layout from '../../components/Layout'
import OfferNav from '../../components/OfferNav'
import { Graf, SubTitle } from '../../components/Type'
import { OfferCards, OfferText, OfferTitle } from '../angebot'
import { Timeline } from '../../components/Timeline'
import SEO from '../../components/SEO'

export default () => (
  <Layout>
    <SEO title={'Bundle: Amplify | Formwerdung | Web Design aus der Schweiz'}
         description={'Amplify - Unser Bundle für den schnellen Start zum Beispiel für Events, Restaurants, Startups, Kampagnen und Portfolios.'} />
    <div className={css(tw`relative`)}>
      <OfferNav />
      <Container>
        <OfferText>
          <OfferTitle className={css(tw`pt-1x md:pt-2 pb-1x m-0 leading-3x`)}>
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
