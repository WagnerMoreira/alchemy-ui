import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img.attrs({
    src: (props: any) => props.src,
  })`
  width: 100px;
  height: 100px;
  border: 1px solid blue;
`
interface Props {
  src: string
}

const Image = ({ src }: Props) => (
  <StyledImage src={src}  />
)

export default Image
