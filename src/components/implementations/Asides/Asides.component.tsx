import * as React from "react";
import * as Styled from "./Asides.styles";

import { Icon } from "components"

const Asides: React.FC = () => (
  <React.Fragment>
    <Styled.LeftAside>
      <Styled.SocialContainer>
        <Icon name="email" size="1rem" />
        <Icon name="linkedin" size="1rem"/>
        <Icon name="dribbble" size="1rem"/>
        <Icon name="github" size="1rem"/>
      </Styled.SocialContainer>
      <Styled.Bar />
    </Styled.LeftAside>

    <Styled.RightAside>
      <span>hi</span>
      <Styled.Bar />
    </Styled.RightAside>
  </React.Fragment>
);

export default Asides;
