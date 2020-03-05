import * as React from "react";
import * as Styled from "./Asides.styles";

import { Icon, Text } from "components";

const Asides: React.FC = () => (
  <Styled.Container>
    <Styled.InnerContainer>
      <Styled.LeftAside>
        <Icon name="email" size="1rem" />
        <Icon name="linkedin" size="1rem" />
        <Icon name="dribbble" size="1rem" />
        <Icon name="github" size="1rem" />
      </Styled.LeftAside>

      <Styled.RightAside>
        <Text.Body>me@jonjoe.io</Text.Body>
      </Styled.RightAside>
    </Styled.InnerContainer>
  </Styled.Container>
);

export default Asides;
