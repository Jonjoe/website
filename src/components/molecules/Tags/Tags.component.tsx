import * as React from "react"
import * as Styled from './Tags.styles'

import { Text } from "components"

interface TagsProps {
  tags: string[]
}

const Tags: React.FC<TagsProps> = props => {
  const { tags } = props

  return (
    <Styled.Container>
      {tags.map((tag: string) => (
        <Styled.Tag><Text.Body>{tag}</Text.Body></Styled.Tag>
      ))}
    </Styled.Container>
  )
}

export default Tags
