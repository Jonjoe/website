import * as React from "react";
import * as Styled from "./LandingSection.styles";

import { Column, Centered, Text, SocialLinks, SkillPoints } from "components";

const LandingSection: React.FC = () => {
  return (
    <Styled.Container>
      <Centered>
        <Styled.Content>
          <Text.Heading3 align="center">
            Web / Mobile / Maker / Hacker
          </Text.Heading3>

          <Text.Heading1 align="center">Jonjoe Whitfield</Text.Heading1>
        </Styled.Content>

        <SkillPoints />
      </Centered>
    </Styled.Container>
  );
};

export default LandingSection;
