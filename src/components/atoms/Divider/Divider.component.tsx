import * as React from "react"
import * as Styled from "./Divider.styles"

interface DividerProps {
  left?: boolean;
  soft?: boolean;
}

const Divider: React.FC<DividerProps> = props => (
  <Styled.Divider left={props.left} soft={props.soft} />
)

export default Divider
