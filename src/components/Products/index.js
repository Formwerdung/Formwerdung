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
      <ul className={css(tw('list-reset m-0 p-0 md:flex md:-mr-2 md:flex-wrap'))}>
        <ProductCard type={'Package'}
                     title={'Auftritt Klein'}
                     forWhom={'Für Restaurants, Startups, Marketingseiten, kleine Portfolios'}
                     features={[
                       'Zwei preliminäre, individuelle Designs zur Auswahl',
                       'Simple zeitabhängige Einträge für das Portfolio, Menükarten oder Produkte'
                     ]}
                     price={'2400 CHF'}>
          <Package className={css(tw('w-2 h-2'))} />
        </ProductCard>
        <ProductCard type={'Package'}
                     title={'Auftritt Gross'}
                     forWhom={'Für Restaurants, Startups, Marketingseiten, kleine Portfolios'}
                     features={[
                       'Zwei preliminäre, individuelle Designs zur Auswahl',
                       'Simple zeitabhängige Einträge für das Portfolio, Menükarten oder Produkte'
                     ]}
                     price={'3600 CHF'}>
          <Package className={css(tw('w-2 h-2'))} />
        </ProductCard>
        <ProductCard type={'Pflege'}
                     title={'Deluxe Hosting'}
                     forWhom={'Für Restaurants, Startups, Marketingseiten, kleine Portfolios'}
                     features={[
                       'Zwei preliminäre, individuelle Designs zur Auswahl',
                       'Simple zeitabhängige Einträge für das Portfolio, Menükarten oder Produkte'
                     ]}
                     price={'1800 CHF / Jahr'}>
          <HardDrive className={css(tw('w-2 h-2'))} />
        </ProductCard>
        <ProductCard type={'Cut and Paste'}
                     title={'Custom Services'}
                     forWhom={'Für Restaurants, Startups, Marketingseiten, kleine Portfolios'}
                     features={[
                       'Zwei preliminäre, individuelle Designs zur Auswahl',
                       'Simple zeitabhängige Einträge für das Portfolio, Menükarten oder Produkte'
                     ]}
                     price={'125 CHF / Stunde'}>
          <Scissors className={css(tw('w-2 h-2'))} />
        </ProductCard>
      </ul>
    </Container>
  </section>;

export default Products;