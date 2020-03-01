import styled, { StyledComponent } from 'astroturf'

interface ContainerProps {
  align?: 'center' | 'left'
}

export const Container: StyledComponent<'div', ContainerProps> = styled('div')`
  max-width: 60ch;

  &.align-center {
    margin: 0 auto;
  }
`
