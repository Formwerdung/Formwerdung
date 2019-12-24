import React from 'react'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import CaseCard from '../CaseCard'
import Container from '../Container'

const CaseList = styled('ul')`
  ${tw`m-0 p-0 sm:flex sm:flex-wrap sm:justify-center`};
`

export default ({ props }) => (
  <section>
    <Container>
      <CaseList>
        {props.map((edge, i) => (
          <CaseCard
            key={i}
            props={edge.node}
            latest={i > 1}
            first={i === 0}
            order={i}
          />
        ))}
      </CaseList>
    </Container>
  </section>
)
