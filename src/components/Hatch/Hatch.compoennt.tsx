import * as React from "react"
import styled from 'styled-components'

import { HeroButton } from "../"

const Panel = styled.section`
  background: green;
  width: 100%;
  flex: 1;
`

const Container = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Hatch: React.FC = () => {
  return (
    <Container>
      <Panel />
      <HeroButton onClick={() => null} label="Hello im a button"/>
      <Panel />
    </Container>
  )
}

export default Hatch
