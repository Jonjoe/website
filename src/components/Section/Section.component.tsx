import * as React from "react"

interface SectionProps {
  children: JSX.Element;
}

const Section: React.FC<SectionProps> = props => {
  const {children} = props

  return (
    <section>{children}</section>
  )
}

export default Section
