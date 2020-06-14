import styled, { StyledComponent } from 'astroturf'
import { Size } from '../types'

interface ContainerProps {
  align?: 'center' | 'left'
  size?: Omit<Size, 'large'>
}

export const Container: StyledComponent<'div', ContainerProps> = styled('div')`
  max-width: 70ch;

  &.align-center {
    margin: 0 auto;
  }

  &.size-small {
    max-width: 45ch;
  }
`
