import * as React from "react";
import * as Styled from "./LandingSection.styles";

import { Column, Centered, Text, SocialLinks } from "components";

const LandingSection: React.FC = () => {
  return (
    <Styled.Container>
      <Centered>
        <Styled.Content>
          <Text.Heading3 centered>Web / Mobile / Maker / Hacker</Text.Heading3>
          <Text.Heading1 centered>Jonjoe Whitfield</Text.Heading1>
        </Styled.Content>
        <SocialLinks />
      </Centered>
    </Styled.Container>
  );
};

export default LandingSection;
