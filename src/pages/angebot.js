/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import Container from '../components/Container';
import Layout from '../components/Layout';
import OfferNav from '../components/OfferNav';
import { css } from 'emotion';
import ServiceCard from '../components/ServiceCard';
import Graf from '../components/Graf';

const OfferPage = props => (
  <Layout>
    <div className={css(tw('relative'))}>
      <OfferNav props={ props.data.file } />
      <Container>
        <div className={css(tw(''))}>
          <div className={css(tw('px-1 md:w-3/5 xl:w-1/2 bg-white'))}>
            <h1 className={css(tw('pt-1 md:pt-2 pb-1 m-0 leading-3'))}>Angebot</h1>
            <Graf>
              Hier finden sie eine Übersicht über unsere Services. Formwerdung bietet alle Dienstleistungen im Bereich Web an,
              die für die technische Umsetzung relevant sind. Dazu gehören inhaltliche Konzepte (inklusive Optimierung für
              Suchmaschinen), Design und Programmierung.
            </Graf>
            <Graf>
              Gerne bieten wir unsere Leistungen auch modular an. Auf der Basis eines unverbindlichen persönlichen Gesprächs
              können wir Ihnen detaillierte Offerten für volle Kostenkontrolle bieten.
            </Graf>
            <Graf>
              Wir Für diese und weitere Services arbeiten wir gerne mit unserem breiten Netzwerk von Partnern zusammen.
            </Graf>
          </div>

          <div className={css(tw('md:w-4/5 md:ml-1/5 lg:w-3/5 lg:ml-2/5 lg:mt-8 xl:w-1/2 xl:ml-1/2 xl:mt-2'))}>
            <h2 className={css(tw('m-0 py-1 mb-1 text-center leading-3'))}>Alle unsere Dienste</h2>

            <ServiceCard title={'Kontaktaufnahme'}
                         description={'Nehmen Sie mit uns Kontakt auf, um ein unverbindliches Treffen zu vereinbaren.'} />
            <ServiceCard title={'Inhaltliche Konzepte'}
                         description={'Wir erstellen in persönlicher Kooperation mit dem Kunden Ausrichtung und Umfang der Inhalte.'} />
            <ServiceCard title={'Online-Strategie'}
                         description={'Nicht angeboten. Auf Wunsch holen wir unsere Social Media und Marketing-Partner mit ins Boot.'}
                         disabled />
            <ServiceCard title={'Content'}
                         description={'Nicht angeboten. Auf Wunsch engagieren wir Fotograph_innen und Texter_innen aus unserem Netzwerk.'}
                         disabled />
            <ServiceCard title={'Design (statisch)'}
                         description={'Wir designen ihre Website für ihren individuellen Inhalte.'} />
            <ServiceCard title={'Design (prototyping)'}
                         description={'Wir erstellen Prototypen ihrer Website, um Ihnen vorab das Nutzererlebnis zeigen zu können.'} />
            <ServiceCard title={'Programmierung'}
                         description={'Wir setzen die Designs und Prototypen in die Tat um.'} />
            <ServiceCard title={'Hosting'}
                         description={'Wir hosten ihre Webseite bei unseren Infrastrukturpartnern und übernehmen Updates.'} />
            <ServiceCard title={'Pflege'}
                         description={'Auf Wunsch begleiten wir ihre Webseite weiter im Bezug auf ihre Optimierung für Suchmaschinen.'} />

          </div>
        </div>
      </Container>
    </div>
  </Layout>
);

export default OfferPage;

export const query = graphql`
  query OfferQuery {
    file: imageSharp(id: { regex: "/hero/" }) {
      sizes(
        maxWidth: 1920
        quality: 90
        traceSVG: { background: "#fff", color: "#f8fafc" }
      ) {
        ...GatsbyImageSharpSizes
      } 
    }
  }
`;
