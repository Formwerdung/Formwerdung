import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { addDecorator, addParameters } from '@storybook/react'

import '../src/pages/global.css'

const newViewports = {
  mobileSM: {
    name: 'Small mobile',
    styles: {
      height: '480px',
      width: '320px',
    },
    type: 'mobile',
  },
  mobileLG: {
    name: 'Large mobile (iPhone X)',
    styles: {
      height: '812px',
      width: '375px',
    },
    type: 'mobile',
  },
  tabletPortrait: {
    name: 'Tablet (portrait)',
    styles: {
      height: '1024px',
      width: '768px',
    },
    type: 'tablet',
  },
  tabletLandscape: {
    name: 'Tablet (landscape)',
    styles: {
      height: '768px',
      width: '1024px',
    },
    type: 'tablet',
  },
}

addDecorator(withA11y)
addDecorator(storyFn => (
  <div
    css={`
      @apply m-10;
    `}
  >
    {storyFn()}
  </div>
))
addParameters({
  backgrounds: [{ name: 'default', value: '#e3e3e3', default: true }],
  viewport: { viewports: newViewports },
})
