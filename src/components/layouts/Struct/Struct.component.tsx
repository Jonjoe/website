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

function Struct(props: StructProps): JSX.Element {
  return (
    <Styled.StructWrapper {...props}>{props.children}</Styled.StructWrapper>
  );
}

export default Struct as React.FC<StructProps>;
