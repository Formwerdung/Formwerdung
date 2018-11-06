import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import tw from 'tailwind.macro'
import { HardDrive, Package, Scissors } from 'react-feather'

import Container from '../Container'
import ProductCard from '../ProductCard'

const iconStyles = css`w-2 h-2`

const ProductTitle = styled('h2')`
  ${tw`m-0 p-1x pt-3x`};
`

const ProductList = styled('ul')`
  ${tw`list-reset m-0 p-0 sm:flex md:-mr-2x sm:flex-wrap`};
`

const Products = () => (
  <section>
    <Container>
      <ProductTitle>Produkte</ProductTitle>
      <ProductList>
        <ProductCard
          type={'Package'}
          title={'Amplify'}
          forWhom={
            'Ein Päckchen mit allem, was man wirklich braucht. Zum Beispiel für Restaurants, Startups, Marketingseiten oder kleine Portfolios.'
          }
          features={[
            'Zwei preliminäre, individuelle Designs zur Auswahl',
            'Simple zeitabhängige Einträge für das Portfolio, Menükarten oder Produkte',
          ]}
          link={'/angebot/klein/'}
          price={'2400 CHF'}
          index={'first'}
        >
          <Package className={iconStyles} />
        </ProductCard>
        <ProductCard
          type={'Package'}
          title={'Magazine'}
          forWhom={
            'Für Neugkeiten und regelmässiges Posting, wie man es von Blogs, Online-Journalismus oder grösseren Portfolios kennt.'
          }
          features={[
            'Zwei preliminäre, individuelle Designs zur Auswahl',
            'Simple zeitabhängige Einträge für das Portfolio, Menükarten oder Produkte',
          ]}
          link={'/angebot/gross/'}
          price={'3600 CHF'}
          index={'even'}
          number={'second'}
        >
          <Package className={iconStyles} />
        </ProductCard>
        <ProductCard
          type={'Pflege'}
          title={'Deluxe Hosting'}
          forWhom={
            'Best-in-class Hosting für den Mittelstand! Zurücklehnen und geniessen. Mit CDN, Continuous Integration und Sicherheitsupdates.'
          }
          features={[
            'Zwei preliminäre, individuelle Designs zur Auswahl',
            'Simple zeitabhängige Einträge für das Portfolio, Menükarten oder Produkte',
          ]}
          link={'/angebot/hosting/'}
          price={'1800 CHF / Jahr'}
          number={'third'}
        >
          <HardDrive className={iconStyles} />
        </ProductCard>
        <ProductCard
          type={'Cut and Paste'}
          title={'Custom Services'}
          forWhom={
            'Gerne bieten wir unsere Services auch massgeschneidert an. So können Sie uns für eine feste Anzahl von Stunden buchen, ' +
            'um ihr Projekt zu unterstützten. Für grössere Projekte bieten wir dabei gerne auch individuelle Offerten an.'
          }
          features={[
            'Zwei preliminäre, individuelle Designs zur Auswahl',
            'Simple zeitabhängige Einträge für das Portfolio, Menükarten oder Produkte',
          ]}
          link={'angebot'}
          price={'125 CHF / Stunde'}
          index={'even'}
          number={'fourth'}
        >
          <Scissors className={iconStyles} />
        </ProductCard>
      </ProductList>
    </Container>
  </section>
)

export default Products
