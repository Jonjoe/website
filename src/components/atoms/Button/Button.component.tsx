import * as React from "react";
import { useHistory } from "react-router-dom";
import * as Styled from "./Button.styles";

import { Text } from "components";

interface ButtonProps {
  children: string;
  width?: string;
  href?: string;
  to?: string;
  hero?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
  const { children, width, hero, href, to } = props;
  const history = useHistory();

  function handleOnClick(href?: string) {
    if (href) {
      window.open(href, "_blank");
    }

    if (to) {
      history.push(to);
    }
  }

  return (
    <Styled.Button
      width={width}
      hero={hero}
      onClick={() => handleOnClick(href)}
    >
      <Text.Inline inverted={hero}>{children}</Text.Inline>
    </Styled.Button>
  );
};

export default Button;
