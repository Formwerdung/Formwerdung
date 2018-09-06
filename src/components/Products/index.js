/*
 * NOTE: The Babel plugin will automatically process the `tw()` function, which
 * means we don’t actually need to import it. ESLint will complain about this,
 * however, so we need to add `tw` as a global variable.
 */

/* global tw */
import React from 'react';
import Container from '../Container';
import ProductCard from '../ProductCard';
import { css } from 'emotion';
import { HardDrive, Package, Scissors } from 'react-feather';

const Products = () =>
  <section>
    <Container>
      <h2 className={css(tw('m-0 p-1 pt-8'))}>Produkte</h2>
      <ul className={css(tw('list-reset m-0 p-0 sm:flex md:-mr-2 sm:flex-wrap'))}>
        <ProductCard type={'Package'}
                     title={'Amplify'}
                     forWhom={'Ein Päckchen mit allem, was man wirklich braucht. Zum Beispiel für Restaurants, Startups, Marketingseiten oder kleine Portfolios.'}
                     features={[
                       'Zwei preliminäre, individuelle Designs zur Auswahl',
                       'Simple zeitabhängige Einträge für das Portfolio, Menükarten oder Produkte'
                     ]}
                     link={'/angebot/klein/'}
                     price={'2400 CHF'}
                     index={'first'}>
          <Package className={css(tw('w-2 h-2'))} />
        </ProductCard>
        <ProductCard type={'Package'}
                     title={'Magazine'}
                     forWhom={'Für Neugkeiten und regelmässiges Posting, wie man es von Blogs, Online-Journalismus oder grösseren Portfolios kennt.'}
                     features={[
                       'Zwei preliminäre, individuelle Designs zur Auswahl',
                       'Simple zeitabhängige Einträge für das Portfolio, Menükarten oder Produkte'
                     ]}
                     link={'/angebot/gross/'}
                     price={'3600 CHF'}
                     index={'even'}
                     number={'second'}>
          <Package className={css(tw('w-2 h-2'))} />
        </ProductCard>
        <ProductCard type={'Pflege'}
                     title={'Deluxe Hosting'}
                     forWhom={'Hosting für den Mittelstand! Best-in-class und sorgenfrei. Mit Content Delivery Network, Continuous Integration und regelmässigen Updates.'}
                     features={[
                       'Zwei preliminäre, individuelle Designs zur Auswahl',
                       'Simple zeitabhängige Einträge für das Portfolio, Menükarten oder Produkte'
                     ]}
                     link={'/angebot/hosting/'}
                     price={'1800 CHF / Jahr'}
                     number={'third'}>
          <HardDrive className={css(tw('w-2 h-2'))} />
        </ProductCard>
        <ProductCard type={'Cut and Paste'}
                     title={'Custom Services'}
                     forWhom={'Gerne bieten wir unsere Services auch massgeschneidert an. So können Sie uns für eine feste Anzahl von Stunden buchen, ' +
                     'um ihr Projekt zu unterstützten. Für grössere Projekte bieten wir dabei gerne auch individuelle Offerten an.'}
                     features={[
                       'Zwei preliminäre, individuelle Designs zur Auswahl',
                       'Simple zeitabhängige Einträge für das Portfolio, Menükarten oder Produkte'
                     ]}
                     price={'150 CHF / Stunde'}
                     index={'even'}
                     number={'fourth'}>
          <Scissors className={css(tw('w-2 h-2'))} />
        </ProductCard>
      </ul>
    </Container>
  </section>;

export default Products;