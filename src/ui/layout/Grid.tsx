import React, { FunctionComponent } from 'react'
import { Size } from '../types'
import styled, { StyledComponent } from 'astroturf'

interface Props {
  size?: Size
}

export const Grid: StyledComponent<'div', Props> = styled('div')`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(20ch, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(min(20ch, 100%), 1fr));

  &.size-medium {
    grid-template-columns: repeat(auto-fit, minmax(40ch, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(min(40ch, 100%), 1fr));
  }

  &.size-large {
    grid-template-columns: repeat(auto-fit, minmax(60ch, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(min(60ch, 100%), 1fr));
  }
`
