import * as React from "react";
import * as Styled from "./ButtonRow.styles";

interface ButtonRowProps {
  children: any;
}

const ButtonRow: React.FC<ButtonRowProps> = props => {
  const { children } = props;

  return <Styled.Container>{children}</Styled.Container>;
};

export default ButtonRow;
