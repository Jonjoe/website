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
  
  ${Panel}:first-child {
    background: #4a95d4;
    //border-bottom: 5px solid red;
  }

  ${Panel}:last-child {
    background: #3b79aa;
    //border-top: 5px solid red;
  }
`

const ButtonWrapper = styled.div`
  position: fixed;
  top: calc(50% - 40px);
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Hatch: React.FC = () => {
  return (
    <Container>
      <Panel />

      <ButtonWrapper>
        <HeroButton onClick={() => null} label="Dive In"/>
      </ButtonWrapper>
      
      <Panel />
    </Container>
  )
}

export default Hatch
