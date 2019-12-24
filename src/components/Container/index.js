import React from 'react'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const containerStyleString = `mx-auto max-w-md lg:max-w-lg xl:max-w-xl h-full`

const Container = styled('div')`
  ${tw`mx-auto max-w-md lg:max-w-lg xl:max-w-xl h-full`};
`

export default Container
