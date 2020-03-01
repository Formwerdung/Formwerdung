import React, { FunctionComponent } from 'react'
import { css } from 'astroturf'
import Img from 'gatsby-image'

interface Props {
  fluid: FluidObject
}

export const Image: FunctionComponent<Props> = ({ fluid }) => (
  <Img
    fluid={fluid}
    className="absolute top-0 left-0 w-full h-full"
    css={css`
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `}
  />
)
