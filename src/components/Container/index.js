import React from 'react'
import styled from 'react-emotion'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'

import { fullscreenImage } from '../../utils/style'

const Container = styled('div')`
  ${tw`mx-auto max-w-md lg:max-w-lg xl:max-w-xl h-full`};
`

export const ImageContainer = styled('div')`
  ${tw`absolute pin-t w-full h-full bg-black-transparent`};
`

export const Image = ({ fluid }) => (
  <Img fluid={fluid} position="absolute" className={fullscreenImage} />
)

export default Container
