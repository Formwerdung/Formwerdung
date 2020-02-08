import React, { FunctionComponent } from 'react'
import styled from 'astroturf'

import CaseCard, { CaseStudy } from './CaseCard'
import Container from '../Container'

interface Props {
  caseStudies: CaseStudy[]
}

export const CaseList: FunctionComponent<Props> = ({ caseStudies }) => (
  <section>
    <Container>
      <ul
        css={`
          @apply m-0 p-0 flex flex-wrap justify-center;
        `}
      >
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
