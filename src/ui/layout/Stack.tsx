import React, { FunctionComponent, ElementType } from 'react'
import styled, { StyledComponent } from 'astroturf'

interface StackProps {
  component?: ElementType
  orientation?: 'horizontal' | 'vertical'
  size?: 'none' | 'small' | 'medium' | 'large'
  width?: string
}

const StackParent: StyledComponent<'div', StackProps> = styled('div')`
  &.size-small {
    > * {
      margin-bottom: 0.75rem;
    }
  }

  &.size-medium {
    > * {
      margin-bottom: 1.5rem;
    }
  }

  &.size-large {
    > * {
      margin-bottom: 3rem;
    }
  }

  &.orientation-vertical {
    > *:last-child {
      margin-bottom: 0;
    }
  }

  &.orientation-horizontal {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    &.size-small {
      margin-right: -0.75rem;
      margin-bottom: -0.75rem;

      > * {
        margin-right: 0.75rem;
      }
    }

    &.size-medium {
      margin-right: -1.5rem;
      margin-bottom: -1.5rem;

      > * {
        margin-right: 1.5rem;
      }
    }

    &.size-large {
      margin-right: -3rem;
      margin-bottom: -3rem;

      > * {
        margin-right: 3rem;
      }
    }
  }
`

export const Stack: FunctionComponent<StackProps> = ({
  children,
  component = 'div',
  orientation = 'vertical',
  size = 'medium',
}) => {
  return (
    <StackParent as={component} orientation={orientation} size={size}>
      {children}
    </StackParent>
  )
}
