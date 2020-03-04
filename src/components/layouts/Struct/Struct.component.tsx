import * as React from "react";
import * as Styled from "./Struct.styles";

interface StructProps {
  children?: any;
  column?: boolean;
  centered?: boolean;
  size?: number;
  fixedWidth?: number;
  fixedHeight?: number;
  padded?: boolean;
  hPadded?: boolean;
  vPadded?: boolean;
}

const Struct: React.FC<StructProps> = (props): JSX.Element => (
  <Styled.StructWrapper {...props}>{props.children}</Styled.StructWrapper>
);

export default Struct;
