import * as React from "react";

import * as Styled from "./Button.styles";

import { Text } from "components";

interface ButtonProps {
  children: string;
  width?: string
}

const Button: React.FC<ButtonProps> = props => {
  const { children, width } = props;

  return (
    <Styled.Button width={width}>
      <Text.Inline inverted>{children}</Text.Inline>
    </Styled.Button>
  );
};

export default Button;
