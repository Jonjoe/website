import * as React from "react";
import * as Styled from "./Tag.styles";

import { Text } from "components";

interface TagProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const Tag: React.FC<TagProps> = props => {
  const { label, onClick } = props;

  return (
    <Styled.Container onClick={onClick}>
      <Text.Body>{label}</Text.Body>
    </Styled.Container>
  );
};

export default Tag;
