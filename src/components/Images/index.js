import styled from 'react-emotion'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'
import { fullscreenImage } from '../../utils/style'
import React from 'react'

export const ImageContentWrapper = styled('div')`
  ${tw`px-1x`};
`
export const ImageContainer = styled('div')`
  ${tw`absolute pin-t w-full h-full bg-black-transparent`};
`
export const Image = ({ fluid }) => (
  <Img fluid={fluid} position="absolute" className={fullscreenImage}/>
)
