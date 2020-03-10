import * as React from "react";

import * as Styled from "./Button.styles";

import { Text } from "components";

interface ButtonProps {
  children: string;
  width?: string
  hero?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
  const { children, width, hero } = props;

  return (
    <Styled.Button width={width} hero={hero}>
      <Text.Inline inverted>{children}</Text.Inline>
    </Styled.Button>
  );
};

export default Button;
