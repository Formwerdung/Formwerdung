import { values } from 'lodash'
import config from '../../tailwind'
import { css } from 'emotion'
import tw from 'tailwind.macro'

export const transition = { transition: 'all .15s ease' }

export const transitionColor = { transition: 'color .15s ease' }

export const borderLeft = {
  'border-left': `1px solid ${config.colors['grey-light']}`,
}

export const textShadow = {
  'text-shadow': '0 4px 4px rgba(0,0,0,0.5)',
}

export const textInput = tw`px-1 py-1 h-4 text-md leading-none w-full appearance-none rounded border border-border-light border-solid bg-off-white`

export const mq = values(config.screens).map(bp => `@media (min-width: ${bp})`)

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
