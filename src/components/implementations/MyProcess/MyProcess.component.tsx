import * as React from "react"
import * as Styled from "./MyProcess.styles"
import { Icon } from "components"

import { theme } from "config"

const Event: React.FC = () => {
  return (
    <Styled.Event>
      <Styled.EventContainer>
        <Styled.EventShield />
        
        <Styled.EventInnerContainer>
          <Icon name="github" color={theme.pallet.WHITE} size="2rem" />
        </Styled.EventInnerContainer>

        <Styled.EventBar />
      </Styled.EventContainer>
    </Styled.Event>
  )
}

const MyProcess: React.FC = () => {
  return (
    <Styled.Container>
      <Event />
      <Event />
      <Event />
      <Event />
    </Styled.Container>
  )
}

export default MyProcess
