import * as React from "react"
import * as Styled from "./Portals.styles"

import { Icon } from "components"

function Portals(): JSX.Element {
  return (
    <Styled.Container>
      <Styled.Left>
        <Icon name="portal-out" />
      </Styled.Left>
      <Styled.Right>
        <Icon name="portal-in" />
      </Styled.Right>
    </Styled.Container>
  )
}

export default Portals as React.FC 
