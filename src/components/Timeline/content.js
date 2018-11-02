import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import { mq } from '../../utils/style'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children, even, config } = this.props

    const { circleWidth, mediaWidthMed, paddingToItem, paddingToItemSmall,
      itemWidth, itemWidthMed, animations, lineWidth, evenItemOffset,
      offsetHidden, triangleWidth, triangleOffset, triangleHeight,
      activeColor, mediaWidthSmall, smallItemWidthPadding, itemPadding }
      = config

    const styleContent = css`
      position: relative;
      bottom: 0;
      width: 15rem;
      padding: ${itemPadding + "px"};
      background: ${activeColor};
    `

    // width: 15rem + 2.25rem = 18units
    const stylesContentEven = css`
      left: 2.25rem;
    
      ${mq[0]} {
        left: -17.25rem; 
      }
    `;

    const stylesContentOdd = css`
      left: 2.25rem;
    `;

    const stylesTriangle = css`
      position: absolute;
      bottom: ${triangleOffset + "px"};
      width: 0;
      height: 0;
      border-style: solid;
    `

    const stylesTriangleLeft = css`
      right: ${`-${triangleWidth - 1}px`};
      left: auto;
      border-width: ${`${triangleHeight}px 0 ${triangleHeight}px ${triangleWidth}px`};
      border-color: ${`transparent transparent transparent ${activeColor}`};
    `

    const stylesTriangleRight = css`
      left: ${`-${triangleWidth - 1}px`};
      border-width: ${`${triangleHeight}px ${triangleWidth}px ${triangleHeight}px 0`};
      border-color: ${`transparent ${activeColor} transparent transparent`};
    `

    const stylesTriangleEven = css`
      ${stylesTriangleRight};
      
      ${mq[0]} {
        ${stylesTriangleLeft};
      }
    `

    const stylesTriangleOdd = stylesTriangleRight;

    let propsToAdd = {}
    if (config.addEvenPropToChildren) {
      propsToAdd = {
        ...propsToAdd,
        even,
      }
    }

    return (
      <div className={css(styleContent, even ? stylesContentEven : stylesContentOdd)}>
        <span className={css(stylesTriangle, even ? stylesTriangleEven : stylesTriangleOdd)} />
        <div ref={c => this.children = c}>
          {React.cloneElement(children, propsToAdd)}
        </div>
      </div>
    )
  }
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
  even: PropTypes.bool.isRequired,
  config: PropTypes.object.isRequired,
}
