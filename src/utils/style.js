/** @jsx jsx */
import { values } from 'lodash'
import { css, jsx } from '@emotion/core'
import tw from 'tailwind.macro'

import config from '../../tailwind.config'

export const transition = { transition: 'all .15s ease' }

export const transitionColor = { transition: 'color .15s ease' }

export const borderLeft = {
  borderLeft: `1px solid ${config.theme.colors['grey-light']}`,
}

export const borderTop = {
  borderTop: `1px solid ${config.theme.colors['grey-light']}`,
}

export const textShadow = {
  textShadow: '0 4px 4px rgba(0,0,0,0.5)',
}

export const textInput = tw`px-1x py-1x h-4x text-md leading-none w-full appearance-none rounded border border-border-light border-solid bg-off-white`

export const mq = values(config.theme.screens).map(
  bp => `@media (min-width: ${bp})`
)

export const fullscreenImage = css`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;

  height: 100%;
  & img {
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;'; /* IE Polyfill */
  }
`

export const screenImage = css`
  width: 256px;
  height: 161px;
  border-radius: 0.2em;
  border: 1px solid grey;
  margin: auto;
  position: relative;
`

export const deviceLeft = css`
  position: relative;
  background: white;
  border-radius: 20px;
  border: 1px solid grey;
  box-shadow: -13px 0 white, -14px 0 grey;
  top: 128px;
  left: 40px;
  padding: 32px 0;
  width: 272px;
  transform: perspective(800px) translateX(0) translateY(-100px)
    translateZ(50px) rotateX(0) rotateY(15deg) rotateZ(0);
  z-index: 15;
  margin-bottom: 30px;
`

export const deviceLeftHover = css`
  border-color: red;
  box-shadow: -13px 0 white, -14px 0 red;
`

export const deviceRight = css`
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
`
