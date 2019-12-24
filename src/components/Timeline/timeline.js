/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

import Entry from './entry'
import { mq } from '../../utils/style'

export default class Timeline extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props
    let i = 0

    const styles = css`
      text-align: center;
      overflow: hidden;

      ${mq[1]} {
        padding-bottom: 2.25rem;
      }
    `

    return (
      <div css={styles}>
        {React.Children.map(children, c => (
          <Entry even={i++ % 2 === 0} icon={c.props.icon}>
            {c}
          </Entry>
        ))}
      </div>
    )
  }
}

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
}
