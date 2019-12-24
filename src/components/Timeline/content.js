/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import config from '../../../tailwind.config'
import { mq } from '../../utils/style'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children, even } = this.props

    const styleContent = css`
      position: relative;
      bottom: 0;
      width: 15rem;
      padding: 16px;
      background: ${config.theme.colors['off-white']};
      border: 1px solid ${config.theme.colors['border-light']};
    `

    // width: 15rem + 2.25rem = 18units
    const stylesContentEven = css`
      left: 2.25rem;

      ${mq[0]} {
        left: -17.25rem;
      }
    `

    const stylesContentOdd = css`
      left: 2.25rem;
    `

    const stylesTriangle = css`
      position: absolute;
      bottom: ${config.theme.width['2x']};
      width: 0;
      height: 0;
      border-style: solid;
    `

    const stylesTriangleLeft = css`
      right: -23px;
      left: auto;
      border-width: ${config.theme.height['1x']} 0 ${config.theme.height['1x']}
        ${config.theme.width['2x']};
      border-color: transparent transparent transparent
        ${config.theme.colors['off-white']};

      :before {
        border-width: calc(${config.theme.height['1x']} + 2px) 0
          calc(${config.theme.height['1x']} + 2px)
          calc(${config.theme.height['2x']} + 2px);
        border-style: solid;
        border-color: transparent transparent transparent
          ${config.theme.colors['border-light']};
        position: absolute;
        width: 0;
        height: 0;
        content: ' ';
        left: -${config.theme.height['2x']};
        top: calc(-${config.theme.height['1x']} - 2px);
        z-index: -1;
      }
    `

    const stylesTriangleRight = css`
      left: -23px;
      border-width: ${config.theme.height['1x']} ${config.theme.width['2x']}
        ${config.theme.height['1x']} 0;
      border-color: transparent ${config.theme.colors['off-white']} transparent
        transparent;

      :before {
        border-width: calc(${config.theme.height['1x']} + 2px)
          calc(${config.theme.height['2x']} + 2px)
          calc(${config.theme.height['1x']} + 2px) 0;
        border-style: solid;
        border-color: transparent ${config.theme.colors['border-light']}
          transparent transparent;
        position: absolute;
        width: 0;
        height: 0;
        content: ' ';
        left: -1px;
        top: calc(-${config.theme.height['1x']} - 2px);
        z-index: -1;
      }
    `

    const stylesTriangleEven = css`
      ${stylesTriangleRight};

      ${mq[0]} {
        ${stylesTriangleLeft};
      }
    `

    const stylesTriangleOdd = stylesTriangleRight

    return (
      <div css={[styleContent, even ? stylesContentEven : stylesContentOdd]}>
        <span
          css={[stylesTriangle, even ? stylesTriangleEven : stylesTriangleOdd]}
        />
        <div ref={c => (this.children = c)}>{React.cloneElement(children)}</div>
      </div>
    )
  }
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
  even: PropTypes.bool.isRequired,
}
