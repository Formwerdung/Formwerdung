import React from 'react'
import { css } from 'emotion'
import tw from 'tailwind.macro'

import Container from '../../components/Container'
import Layout from '../../components/Layout'
import OfferNav from '../../components/OfferNav'
import { OfferText, OfferTitle } from '../angebot'
import { Graf } from '../../components/Type'
import SEO from '../../components/SEO'

export default () => (
  <Layout>
    <SEO
      title={'Deluxe Hosting | Formwerdung | Web Design aus der Schweiz'}
      description={
        'Unser rundum sorgenfrei Hosting-Angebot mit CDN, Continuous Integration und Administration.'
      }
    />
    <div className={css(tw`relative`)}>
      <OfferNav />
      <Container>
        <OfferText>
          <OfferTitle>Hosting</OfferTitle>
          <Graf>
            Unser neuestes Angebot ist ein rundum-sorglos, sie-müssen-nichts-machen
            Hostingpaket, welches best-in-class Hosting für alle zugänglich machen
            soll.
          </Graf>
          <Graf>
            Die meisten Hosting-Plattformen in der Schweiz bieten sehr guten Service
            an – ausser beim Aktualisieren ihrer Website. Software muss ständig
            administriert werden. Mitunter können solche Arbeiten
            auch teilweise automatisiert werden, was die Kosten deutlich senkt.
            Mit dem nötigen Know-how kann man also günstig hosten wie die ganz Grossen!
          </Graf>
          <Graf>
            Genau das möchten wir Ihnen anbieten. Mit diesem Paket richten wir Ihnen
            das beste Hosting ein, das wir kennen (so wie wir es für diese Seite verwenden)
            und administrieren innerhalb eines fixen Zeitkontingents ihre Seite, so dass sie
            immer sicher bleibt.
          </Graf>
        </OfferText>
      </Container>
    </div>
  </Layout>
)
