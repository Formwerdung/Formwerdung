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
      title={'Bundle: Magazine | Formwerdung | Web Design aus der Schweiz'}
      description={
        'Magazine - Unser Bundle für eine Vielzahl von Anwendungen im Bereich Blogs, Online-Journalismus und anderen Syndicated Content.'
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
          <OfferTitle>Magazine</OfferTitle>
          <Graf>
            Ein Paket mit fast unbegrenzten Anwendungsmöglichkeiten. Beinhaltet
            fast alles, was von einer modernen Website verlangt wird. Der Fokus
            auf Features für das Publizieren regelmässiger Beiträge ermöglicht
            es, Besucher langfristig an sich zu binden. Mit einer flexiblen
            Anzahl von Seiten und Artikeln haben Sie Platz für Neuigkeiten,
            Fallstudien und sogar ihr eigenes Magazin.
          </Graf>
          <Graf>
            ZU diesem Paket gehören ein vollwertiges CMS mit Accounts,
            Verschlagwortung, Autoren- und andere Archiven ebenso wie ein
            Kontakt-Formular. So können Sie ausführlich über ihre Produkte und
            Leistungen informieren.
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
