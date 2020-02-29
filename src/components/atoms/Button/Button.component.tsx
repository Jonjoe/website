import * as React from "react"

import * as Styled from './Button.styles'

interface ButtonProps {
  children: JSX.Element | JSX.Element[]
}

const Button: React.FC<ButtonProps> = props => {
  const { children } = props

  return (
    <Styled.Button>
      {children}
    </Styled.Button>
  ) 
}

export default Button
