import React, { FunctionComponent, ElementType, Component } from 'react'
import styled from 'astroturf'

interface ImpostorWrapperProps {
  Component?: ElementType
}

export const ImposterWrapper: FunctionComponent<ImpostorWrapperProps> = ({
  children,
  Component = 'div',
}) => {
  return (
    <Component
      css={`
        @apply relative;
      `}
    >
      {children}
    </Component>
  )
}

const ImposterBase = styled('div')`
  @apply absolute flex w-full;

  &.variant-topbar {
    @apply top-0 left-0 right-0 justify-between items-start flex-wrap;
  }

  &.variant-full {
    @apply top-0 left-0 bottom-0 right-0 h-full justify-center items-center;
  }

  &.variant-bottom {
    @apply bottom-0 right-0 left-0 w-full;
  }
`

interface ImposterProps {
  component?: ElementType
  variant?: 'topbar' | 'full' | 'bottom'
}

export const Imposter: FunctionComponent<ImposterProps> = ({
  component = 'div',
  children,
  variant = 'full',
}) => {
  return (
    <ImposterBase as={component} variant={variant}>
      {children}
    </ImposterBase>
  )
}
