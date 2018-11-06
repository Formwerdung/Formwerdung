import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

import config from '../../../tailwind'
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
      padding-top: ${config.padding['4x']};
      background: ${config.colors['border-light']};
      margin: 0 auto 0 ${config.margin['1x']};
    
      ${mq[0]} {
        margin: 0 auto ${config.margin['m3x']} auto;
      }
    
      @media print {
        margin: 0px;
        width: 100%;
        padding-top: 0px;
      }
    `

    const stylesCircle = css`
      position: absolute;
      bottom: ${config.width['2x']};
      transform: translateX(-50%);
      width: ${config.width['2x']};
      height: ${config.height['2x']};
      border-radius: 50%;
      z-index: 1;
      background: white;
      border: 1px solid ${config.colors['border-light']};
    `

    const stylesCircleInner = css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    `

    return (
      <div className={stylesBase}>
        <div>
          <Content {...props}>
            {children}
          </Content>
        </div>
        <span className={css(stylesCircle)}>
          <span className={css(stylesCircleInner)}>{icon}</span>
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

