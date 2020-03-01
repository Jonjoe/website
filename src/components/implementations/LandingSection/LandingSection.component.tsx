import * as React from "react";
import * as Styled from "./LandingSection.styles";

import { Column, Caption, Button, Text, SocialLinks } from "components";

const LandingSection: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Background />
      <Styled.Content>
        <Column>
          <Caption
            subtitle="Web / Mobile / Maker / Hacker"
            title="Software Engineer"
          />

          <div style={{ marginBottom: 30 }}>
            <Button>
              <Text.HeroBody>Contact Me</Text.HeroBody>
            </Button>
          </div>

          <SocialLinks />
        </Column>
      </Styled.Content>
    </Styled.Container>
  );
};

export default LandingSection;
