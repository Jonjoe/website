import styled from 'styled-components'


export interface StyledButtonProps {
  onClick: any
}

export const Button = styled.button<StyledButtonProps>`
  background: yellow;
  padding: 10px;
`
