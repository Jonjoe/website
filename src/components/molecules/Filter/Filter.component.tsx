import * as React from "react";
import * as Styled from "./Filter.styles";

import { Tag } from "components";

interface FilterProps {
  tags: string[];
  activeTag: string;
  setActiveTag: (tag: string) => void;
}

const Filter: React.FC<FilterProps> = props => {
  const { activeTag, setActiveTag } = props;
  const tags = ["All", ...props.tags]

  function isTagActive(tag: string, activeTag: string): boolean {
    return tag === activeTag;
  }

  return (
    <Styled.Container>
      {Object.values(tags).map((tag, index) => (
        <Tag
          key={index}
          label={tag}
          active={isTagActive(tag, activeTag)}
          onClick={() => setActiveTag(tag)}
        />
      ))}
    </Styled.Container>
  );
};

export default Filter;
