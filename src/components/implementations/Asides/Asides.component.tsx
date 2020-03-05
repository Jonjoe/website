import * as React from "react";
import * as Styled from "./Asides.styles";

import { Text, SocialLinks } from "components";

interface AsidesProps {
  accent: string;
}

const Asides: React.FC<AsidesProps> = props => {
  const { accent } = props;

  return (
    <Styled.Container>
      <Styled.InnerContainer>
        <Styled.LeftAside accent={accent}>
          <SocialLinks />
        </Styled.LeftAside>

        <Styled.RightAside accent={accent}>
          <Text.Body>me@jonjoe.io</Text.Body>
        </Styled.RightAside>
      </Styled.InnerContainer>
    </Styled.Container>
  );
};

export default Asides;
