import styled from 'styled-components'


export interface StyledButtonProps {
  onClick: any
}

export const Button = styled.button<StyledButtonProps>`
  background: #e0795f;
  border: none;
  border-bottom: 5px solid #dd532c;
  padding: 30px 0px;
  width: 250px;
  span {
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`
