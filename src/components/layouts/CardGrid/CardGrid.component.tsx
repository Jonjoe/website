import * as React from "react"
import * as Styled from './CardGrid.styles'

const CardGrid: React.FC = props => (
  <Styled.Container>
    {props.children}
  </Styled.Container>
)

export default CardGrid

