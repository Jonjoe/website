import * as React from "react";

import * as Styled from "./Centered.styles";

const Centered: React.FC = props => (
  <Styled.OuterContainer>
    <Styled.InnerContainer>{props.children}</Styled.InnerContainer>
  </Styled.OuterContainer>
);

export default Centered;
