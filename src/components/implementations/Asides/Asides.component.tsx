import * as React from "react";
import * as Styled from "./Asides.styles";

import { Text, SocialLinks } from "components";

const Asides: React.FC = () => (
  <Styled.Container>
    <Styled.InnerContainer>
      <Styled.LeftAside>
        <SocialLinks />
      </Styled.LeftAside>

      <Styled.RightAside>
        <Text.Body>me@jonjoe.io</Text.Body>
      </Styled.RightAside>
    </Styled.InnerContainer>
  </Styled.Container>
);

export default Asides;
