import * as React from "react";
import * as Styled from "./Asides.styles";

import { Text, SocialLinks } from "components";

interface AsidesProps {
  accent: string;
}

const Asides: React.FC<AsidesProps> = props => {
  const { accent } = props;

  return (
    <React.Fragment>
      <Styled.LeftAside accent={accent}>
        <SocialLinks />
      </Styled.LeftAside>

      <Styled.RightAside accent={accent}>
        <Text.Body inverted>me@jonjoe.io</Text.Body>
      </Styled.RightAside>
    </React.Fragment>
  );
};

export default Asides;
