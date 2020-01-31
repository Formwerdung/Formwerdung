import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import CaseCard, { Case as CaseStudy } from './CaseCard'
import Container from '../Container'

interface Props {
  caseStudies: CaseStudy[]
}

export const CaseList: FunctionComponent<Props> = ({ caseStudies }) => (
  <section>
    <Container>
      <ul css={tw`m-0 p-0 sm:flex sm:flex-wrap sm:justify-center`}>
        {caseStudies.map((entity: CaseStudy, i: number) => (
          <CaseCard
            key={i}
            caseStudy={entity}
            latest={i > 1}
            first={i === 0}
            order={i}
          />
        ))}
      </ul>
    </Container>
  </section>
)
