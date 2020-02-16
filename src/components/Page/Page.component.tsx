import * as React from "react"
import * as Styled from './Page.styles'

interface PageProps {
  children: JSX.Element[] | JSX.Element 
}

const Page: React.FC<PageProps> = props => {
  const { children } = props

  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  )
}

export default Page 
