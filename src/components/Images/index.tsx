/** @jsx jsx */
import React, { FunctionComponent } from 'react';
import { jsx } from '@emotion/core'
import styled from '@emotion/styled';
import Img, { FluidObject } from 'gatsby-image';
import tw from 'tailwind.macro';

import { fullscreenImage } from '../../utils/style';

interface Props {
  fluid: FluidObject
}

export const ImageContentWrapper = styled('div')`
  ${tw`px-1x`};
`
export const ImageContainer = styled('div')`
  ${tw`absolute top-0 w-full h-full bg-black-transparent`};
`
export const Image: FunctionComponent<Props> = ({ fluid }) => (
  <Img fluid={fluid} css={fullscreenImage} />
)
