import * as React from "react";
import * as Styled from "./Tag.styles";

import { Text } from "components";

interface TagProps {
  label: string;
  basic?: boolean;
  active?: boolean;
  onClick?: () => void;
}

const Tag: React.FC<TagProps> = props => {
  const { basic, label, onClick } = props;

  return (
    <Styled.Container onClick={onClick} basic={basic}>
      <Text.Body>{label}</Text.Body>
    </Styled.Container>
  );
};

export default Tag;
