import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Button, Welcome } from '@storybook/react/demo'
import React from 'react'
import { Graf } from '../src/components/Type'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome />)

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

storiesOf('Graf', module).add('with text', () => (
  <div>
    <Graf>Lorem ipsum</Graf>
    <Graf>Lorem lorem</Graf>
  </div>
))
