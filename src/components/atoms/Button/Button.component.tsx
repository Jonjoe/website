import * as React from "react";

import * as Styled from "./Button.styles";

import { Text } from "components";

interface ButtonProps {
  children: string;
  width?: string;
  href?: string;
  hero?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
  const { children, width, hero, href } = props;

  function handleOnClick(href?: string) {
    if(href) {
      window.open(href, '_blank')
    }
  }

  return (
    <Styled.Button width={width} hero={hero} onClick={() => handleOnClick(href)}>
      <Text.Inline inverted>{children}</Text.Inline>
    </Styled.Button>
  );
};

export default Button;
