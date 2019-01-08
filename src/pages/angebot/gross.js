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
    <SEO
      title={'Bundle: Magazine | Formwerdung | Web Design aus der Schweiz'}
      description={
        'Magazine - Unser Bundle für eine Vielzahl von Anwendungen im Bereich Blogs, Online-Journalismus und anderen Syndicated Content.'
      }
    />
    <div className={css(tw`relative`)}>
      <OfferNav />
      <Container>
        <OfferText>
          <OfferTitle>Magazine</OfferTitle>
          <Graf>
            Ein Paket mit fast unbegrenzten Anwendungsmöglichkeiten. Beinhaltet
            fast alles, was von einer modernen Website verlangt wird. Der Fokus
            auf Features für das Publizieren regelmässiger Beiträge ermöglicht es,
            Besucher langfristig an sich zu binden. Mit einer flexiblen Anzahl von
            Seiten und Artikeln haben Sie Platz für Neuigkeiten, Fallstudien und
            sogar ihr eigenes Magazin.
          </Graf>
          <Graf>
            ZU diesem Paket gehören ein vollwertiges CMS mit Accounts,
            Verschlagwortung, Autoren- und andere Archiven ebenso wie
            ein Kontakt-Formular. So können Sie ausführlich über ihre Produkte
            und Leistungen informieren.
          </Graf>
        </OfferText>
        <OfferCards>
          <SubTitle className={css(tw`text-center`)}>Ablauf</SubTitle>
          <Timeline>
            <section>
              <h3>Content</h3>
              <div>
                Auf der Basis eines ausführlichen Gesprächs wird ein Content-Konzept erstellt.
              </div>
            </section>
            <section>
              <h3>Designvorschläge</h3>
              <div>
                Wir erstellen zwei individuelle Designvorschläge zu ihrer Auswahl, die als Grundlage für die Website dienen.
              </div>
            </section>
            <section>
              <h3>Umsetzung</h3>
              <div>
                Komplettummsetzung des Designs, Bugfixing und Testing.
              </div>
            </section>
            <section>
              <h3>Schulung</h3>
              <div>
                Wir schulen Sie im Bearbeiten Ihrer Website direkt mit Ihrem Content.
              </div>
            </section>
            <section>
              <h3>Hosting</h3>
              <div>
                Auf Wunsch hosten und administrieren wird ihre Website (extra).
              </div>
            </section>
          </Timeline>
        </OfferCards>
      </Container>
    </div>
  </Layout>
)
