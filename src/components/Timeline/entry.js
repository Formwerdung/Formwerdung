/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'

import config from '../../../tailwind.config'
import Content from './content'
import { mq } from '../../utils/style'

export default class Entry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children, icon, ...props } = this.props

    const stylesBase = css`
      list-style-type: none;
      position: relative;
      width: 1px;
      padding-top: ${config.theme.padding['4x']};
      background: ${config.theme.colors['border-light']};
      margin: 0 auto 0 ${config.theme.margin['1x']};

      ${mq[0]} {
        margin: 0 auto ${config.theme.margin['m3x']} auto;
      }

      @media print {
        margin: 0px;
        width: 100%;
        padding-top: 0px;
      }
    `

    const stylesCircle = css`
      position: absolute;
      bottom: ${config.theme.width['2x']};
      transform: translateX(-50%);
      width: ${config.theme.width['2x']};
      height: ${config.theme.height['2x']};
      border-radius: 50%;
      z-index: 1;
      background: white;
      border: 1px solid ${config.theme.colors['border-light']};
    `

    const stylesCircleInner = css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    `

    return (
      <div css={stylesBase}>
        <div>
          <Content {...props}>{children}</Content>
        </div>
        <span css={stylesCircle}>
          <span css={stylesCircleInner}>{icon}</span>
        </span>
      </div>
    )
  }
}

Entry.propTypes = {
  children: PropTypes.node.isRequired,
  even: PropTypes.bool.isRequired,
  icon: PropTypes.node,
}
