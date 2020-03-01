import React, { FunctionComponent } from 'react'
import Img from 'gatsby-image'
import { css } from 'astroturf'

interface DeviceProps {
  orientation?: 'left' | 'right'
  fluidImage: any
}

export const Device: FunctionComponent<DeviceProps> = ({
  fluidImage,
  orientation = 'right',
}) => {
  return (
    <>
      {orientation === 'left' && (
        <div
          css={`
            position: relative;
            background: black;
            border-radius: 20px;
            border: 1px solid white;
            box-shadow: -13px 0 black, -14px 0 white;
            top: 128px;
            left: 40px;
            padding: 32px 0;
            width: 272px;
            transform: perspective(800px) translateX(0) translateY(-100px)
              translateZ(50px) rotateX(0) rotateY(15deg) rotateZ(0);
            z-index: 15;
            margin-bottom: 30px;
          `}
        >
          <Img
            fluid={fluidImage}
            css={`
              width: 256px;
              height: 161px;
              border-radius: 0.2em;
              border: 1px solid grey;
              margin: auto;
              position: relative;
            `}
          />
        </div>
      )}
      {orientation === 'right' && (
        <div
          css={`
            position: relative;
            background: white;
            border-radius: 20px;
            border: 1px solid grey;
            box-shadow: 13px 0 white, 14px 0 grey;
            top: 128px;
            left: 9px;
            padding: 32px 0;
            width: 272px;
            transform: perspective(800px) translateX(0) translateY(-100px)
              translateZ(50px) rotateX(0) rotateY(-15deg) rotateZ(0);
            z-index: 15;
            margin-bottom: 30px;
          `}
        >
          <Img
            fluid={fluidImage}
            css={`
              width: 256px;
              height: 161px;
              border-radius: 0.2em;
              border: 1px solid grey;
              margin: auto;
              position: relative;
            `}
          />
        </div>
      )}
    </>
  )
}
