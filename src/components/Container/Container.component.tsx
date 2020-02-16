import * as React from "react"

import * as Styled from "./Container.styles"

interface ContainerProps {
  children: JSX.Element | JSX.Element[]
}

const Container: React.FC<ContainerProps> = props => {
  const { children  } = props

  return (
    <Styled.Container>{children}</Styled.Container>
  )
}

export default Container
