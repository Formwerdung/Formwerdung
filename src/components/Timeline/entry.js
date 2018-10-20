import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

import Content from './content'

export default class Entry extends React.Component {
  constructor(props) {
    super(props)
    this.onInView = this.onInView.bind(this)
    this.state = { inView: false }
  }

  onInView(inView) {
    this.setState({ inView })
  }

  render() {
    const { children, icon, ...props } = this.props
    const { inView } = this.state

    const { lineWidth, circleWidth, paddingTop, lineColor, activeColor,
      mediaWidthSmall, twoSidedOverlap, animations } = this.props.config

    const stylesBase = css`
      list-style-type: none;
      position: relative;
      width: ${lineWidth + "px"};
      margin: ${`0 auto -${twoSidedOverlap}px auto`};
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
      background: ${lineColor};
      transition: ${animations ? "background .5s ease-in-out" : null};
      z-index: 1;
    `

    const stylesCircleInner = css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    `

    const stylesCircleInView = css`
      background: white;
      border: 1px solid ${activeColor};
    `

    return (
      <div className={stylesBase}>
        <div>
          <Content {...props}
            inView={inView} onInView={this.onInView}
          >
            {children}
          </Content>
        </div>
        <span className={css(stylesCircle, inView && stylesCircleInView)}>
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

