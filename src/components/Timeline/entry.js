import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

import Content from './content'

export default class Entry extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children, icon, ...props } = this.props

    const { lineWidth, circleWidth, paddingTop, lineColor, activeColor,
      mediaWidthSmall, twoSidedOverlap, animations } = this.props.config

    const stylesBase = css`
      list-style-type: none;
      position: relative;
      width: ${lineWidth + "px"};
      margin: ${`0 auto -2.25rem auto`};
      padding-top: ${paddingTop + "px"};
      background: ${lineColor};
    
      ${`@media screen and (max-width: ${mediaWidthSmall}px)`} {
        margin: 0 auto 0 20px;
      }
    
      @media print {
        margin: 0px;
        width: 100%;
        padding-top: 0px;
      }
    `

    const stylesCircle = css`
      position: absolute;
      bottom: 0;
      transform: translateX(-50%);
      width: ${circleWidth + "px"};
      height: ${circleWidth + "px"};
      border-radius: 50%;
      transition: ${animations ? "background .5s ease-in-out" : null};
      z-index: 1;
      background: white;
      border: 1px solid ${activeColor};
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
  config: PropTypes.object.isRequired,
  icon: PropTypes.node,
}

