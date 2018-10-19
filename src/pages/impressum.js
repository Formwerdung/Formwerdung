import React from 'react'
import { graphql } from 'gatsby'
import { css } from 'emotion'
import styled from 'react-emotion'
import tw from 'tailwind.macro'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/Layout'
import Container, { Image, ImageContainer } from '../components/Container'
import { HeroTitle } from '../components/Hero'
import Graf from '../components/Graf'

const ImageContentWrapper = styled('div')`
  ${tw`px-1`};
`

const TextContainer = styled('div')`
  ${tw`px-1 md:w-3/5 xl:w-1/2 pt-1 md:pt-2`};
`

export const SubTitle = styled('h2')`
  ${tw`leading-3 text-2xl`};
`

export default props => (
  <Layout>
    <figure className={css(tw`relative m-0`)}>
      <Container>
        <ImageContentWrapper>
          <HeroTitle>Impressum</HeroTitle>
        </ImageContentWrapper>
      </Container>
      <ImageContainer>
        <Image sizes={props.data.file.sizes} />
      </ImageContainer>
    </figure>
    <Container>
      <TextContainer>
        <SubTitle>Kontakt</SubTitle>
        <Graf>
          <address className={css(tw`pb-1`)}>
            Formwerdung
            <br />
            Marin Aeschbach
            <br />
            Nordstrasse 116
            <br />
            8037 Zürich
          </address>
        </Graf>
        <Graf>Das Formwerdung Logo wurde designed von Zoé Blanc.</Graf>

        <SubTitle className={css(tw`pt-2`)}>
          Haftungsausschluss und Copyright
        </SubTitle>
        <Graf>
          Eine Haftung für die Richtigkeit der Angaben, Daten und Links wird
          nicht übernommen. Links zu Inhalten Dritter werden als Service
          bereitgestellt. Für diese Inhalte sind deren Betreiber verantwortlich.
          Diese Website und alle dazugehörigen Texte, Grafiken und andere
          Materialien sind urheberrechtlich geschützt. Jegliche Verwendung ohne
          vorherige schriftliche Zustimmung ist nicht gestattet.
        </Graf>

        <SubTitle className={css(tw`pt-2`)}>Datenschutz</SubTitle>
        <Graf>
          Diese Webseite verwendet Cookies. Das sind winzige
          Text­in­for­ma­tionen, die über den Browser als Datei gespei­chert
          werden. Unsere Cookies können nicht verwendet werden, um Besucher
          persön­lich zu iden­ti­fi­zieren. Als Nutzer*in können Sie die Cookies
          auf Ihrem Computer selbst verwalten: Alle gängigen Browser verfügen
          über Optionen, die das Spei­chern von Cookies verhin­dern und es
          ermöglichen, bereits vorhandene Cookies wieder zu löschen. Sie können
          unsere Webseite unein­ge­schränkt nutzen, wenn Sie Cookies nicht
          zulassen.
        </Graf>
        <Graf>
          Auf dieser Webseite wird der Webana­ly­se­dienst Google Analy­tics
          verwendet. Die durch den Cookie von Google Analy­tics erzeugten
          Infor­ma­tionen über Ihre Benut­zung dieser Webseite werden in der
          Regel an einen Server von Google in den USA über­tragen und dort
          gespei­chert. Aller­dings wird Ihre IP-Adresse von Google inner­halb
          von Mitglied­staaten der Euro­päi­schen Union oder in anderen
          Vertrags­staaten des Abkom­mens über den Euro­päi­schen
          Wirt­schafts­raum zuvor gekürzt (anony­mi­siert). Nur in
          Ausnah­me­fällen wird die volle IP-Adresse an einen Server von Google
          in den USA über­tragen und dort gekürzt. Google wird diese
          Infor­ma­tionen benutzen, um Ihre Nutzung der Webseite auszu­werten,
          um Reports über die Webseiteak­ti­vi­täten für die
          Websei­te­be­trei­be­r*innen zusam­men­zu­stellen und um weitere mit
          der Websei­te­nut­zung und der Inter­net­nut­zung verbun­dene
          Dienst­leis­tungen zu erbringen. Auch wird Google diese
          Infor­ma­tionen gege­be­nen­falls an Dritte über­tragen, sofern dies
          gesetz­lich vorge­schrieben oder soweit Dritte diese Daten im Auftrag
          von Google verar­beiten. Die im Rahmen von Google Analy­tics von Ihrem
          Browser über­mit­telte IP-Adresse wird nicht mit anderen Daten von
          Google zusam­men­ge­führt. Durch die Nutzung dieser Webseite erklären
          Sie sich mit der Bear­bei­tung der über Sie erho­benen Daten durch
          Google in der zuvor beschrie­benen Art und Weise und zu dem zuvor
          benannten Zweck einver­standen. Aufgrund mögli­cher laufender
          Aktua­li­sie­rung der Daten­schutz­er­klä­rung von Google, weisen wir
          hier auf die{' '}
          <OutboundLink href={'https://policies.google.com/privacy?hl=de'}>
            aktu­ellste Version
          </OutboundLink>{' '}
          hin.
        </Graf>
        <Graf>
          Mit dem folgenden Link können Sie ein Cookie setzen, um in Zukunft
          nicht mehr von Google Analytics erfasst zu werden:{' '}
          <a href="javascript:gaOptout();">Google Analytics Opt-out</a>
          {''}.
        </Graf>
        <Graf>
          Unsere Implementierung von Google Analytics respektiert die
          Do-Not-Track-Option ihres Browsers. Wenn Sie diese setzen, wird Google
          Analytics für Sie nicht geladen.
        </Graf>
      </TextContainer>
    </Container>
  </Layout>
)

export const query = graphql`
  query ImprintQuery {
    file: imageSharp(id: { regex: "/hero/" }) {
      sizes(maxWidth: 1920, quality: 90) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
