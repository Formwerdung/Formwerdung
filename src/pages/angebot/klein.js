/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import OfferNav from '../../components/OfferNav';
import { css } from 'emotion';
import { ChevronsDown } from 'react-feather';

const OfferSmallPage = props =>
  <Layout>
    <Container>
      <OfferNav props={ props.data.file } />
      <div className={css(tw('px-1'))}>
        <h1 className={css(tw('pt-8 m-0 leading-3'))}>Angebot kleine Webseite</h1>
        <p className={css(tw('py-1 m-0'))}>
          Ein Paket für klare und zielgerichtete Kommunikation. Hier sind nur die Features dabei, die man wirklich braucht:
          Einige wenige Seiten, auf denen man sich und sein Produkt vorstellen und Kontaktdaten hinterlassen kann.
        </p>
        <p className={css(tw('pb-1 m-0'))}>
          Dazu kommen eine flexible Anzahl von Beiträgen. Beiträge sind Inhalte ein bisschen wie Blogeinträge, aber speziell
          den Bedürfnissen des Kunden angepasst, wodurch sie extrem flexibel eingesetzt werden können. Ein Startup kann diese
          zum Beispiel für Produkte nutzen und kann so jederzeit ein angepasstes Angebot kommunizieren. Ein Restaurant
          kann stets sein aktuelles Menü präsentieren (Beiträge wären hier einzelne Gerichte), ein_e Künstler_in neue Werke ins Showcase aufnehmen.
        </p>
        <p className={css(tw('pb-1 m-0'))}>
          Dieses Angebot ist aber auch der optimale erste Trittstein für grössere Aufgaben. Die geringe Entwicklungszeit ermöglicht es,
          extrem einen ersten Eindruck zu vermitteln (auch grossartig für zeitlich begrenzte Kampagnen). Seiten <em>under
          construction</em> gehören so der Vergangenheit an. Zudem können die verwendeten Technologien mühelos für
          komplexeste Webapps verwendet werden. So ist ein sukzessiver Aufbau möglich, was die Entwicklung von Apps äusserst kostengünstig macht.
        </p>

        <h2 className={css(tw('leading-3'))}>Ablauf</h2>
        <div>
          <h3 className={css(tw('m-0'))}>Kontaktaufnahme</h3>
          <span>Nehmen sie unverbindlich mit uns Kontakt auf, zum Beispiel über das Formular oder den Email-Link unten.</span>
        </div>
        <ChevronsDown />
        <div>
          <h3 className={css(tw('m-0'))}>Inhaltskonzept</h3>
          <span>Bei einem unverbindnlichen Treffen können wir Ihre Bedürfnisse klären und ein einfaches inhaltliches Konzept erstellen</span>
        </div>
        <ChevronsDown />
        <div>
          <h3 className={css(tw('m-0'))}>Designvorschläge</h3>
          <span>Wir erstellen zwei Designskonzepte </span>
        </div>
        <ChevronsDown />
        <div>
          <h3 className={css(tw('m-0'))}>Prototypen</h3>
          <span>Wir erstellen zwei Designskonzepte </span>
        </div>
        <ChevronsDown />
      </div>
    </Container>
  </Layout>;

export default OfferSmallPage;

export const query = graphql`
  query OfferSmallQuery {
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