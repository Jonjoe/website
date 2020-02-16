import * as React from "react"
import * as Styled from './Base.styles'

interface BaseProps {
  children: any
}

const Base: React.FC<BaseProps> = props => {
  const { children } = props
  
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  )
}

export default Base
