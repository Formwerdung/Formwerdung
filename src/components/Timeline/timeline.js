import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

import Entry from './entry'
import defaultConfig from './config'
import { mq } from '../../utils/style'

export default class Timeline extends React.Component {
  constructor(props) {
    super(props)
    // this.state = { twoSided: true }
    // this.onTwoSidedChange = this.onTwoSidedChange.bind(this)
    this.componentWillReceiveProps(props)
  }

  /**
   * Merge config with default only once (optimize)
   */
  componentWillReceiveProps(newProps) {
    // eslint-disable-next-line no-unused-vars
    const { children, ...config } = newProps // children are not config
    this.mergedConfig = {
      ...defaultConfig,
      ...config,
    }
  }

  render() {
    const { children } = this.props
    const { color } = this.mergedConfig
    let i = 0

    const styles = css`
      text-align: center;
      color: ${color};
      overflow: hidden;
    
      ${mq[1]} {
        padding-bottom: 2.25rem;
      }
    `

    return (
      <div className={css(styles)}>
        {React.Children.map(children, c =>
          <Entry even={i++ % 2 === 0} config={this.mergedConfig}
            icon={c.props.icon}>
            {c}
          </Entry>
        )}
      </div>
    )
  }
}

Timeline.propTypes = {
  children: PropTypes.node.isRequired,

  // global
  paddingTop: PropTypes.number,
  mediaWidthMed: PropTypes.number,
  mediaWidthSmall: PropTypes.number,
  activeColor: PropTypes.string,
  color: PropTypes.string,
  twoSidedOverlap: PropTypes.number,
  animations: PropTypes.bool,
  addEvenPropToChildren: PropTypes.bool,

  // line
  lineColor: PropTypes.string,
  circleWidth: PropTypes.number,
  paddingToItem: PropTypes.number,
  paddingToItemSmall: PropTypes.number,
  lineWidth: PropTypes.number,

  // triangle
  triangleWidth: PropTypes.number,
  triangleHeight: PropTypes.number,

  // list item content
  itemWidth: PropTypes.number,
  itemWidthMed: PropTypes.number,
  offsetHidden: PropTypes.number,
  triangleOffset: PropTypes.number,
  smallItemWidthPadding: PropTypes.number,
  itemPadding: PropTypes.number,
  evenItemOffset: PropTypes.number,
}
