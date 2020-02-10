import * as React from "react"
import styled from 'styled-components'

const Panel = styled.section`
  background: green;
  margin: 10px;
  width: 100px;
  padding: 20px;
`

const Container = styled.div`
  background: black;
  padding: 20px;
`

const Hatch: React.FC = () => {
  return (
    <Container>
      <Panel />
      <Panel />
    </Container>
  )
}

export default Hatch
