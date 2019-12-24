/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'
import { fullscreenImage } from '../../utils/style'

export const ImageContentWrapper = styled('div')`
  ${tw`px-1x`};
`
export const ImageContainer = styled('div')`
  ${tw`absolute top-0 w-full h-full bg-black-transparent`};
`
export const Image = ({ fluid }) => (
  <Img fluid={fluid} position="absolute" css={fullscreenImage} />
)
