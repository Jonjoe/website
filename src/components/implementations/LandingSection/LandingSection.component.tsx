import * as React from "react";
import * as Styled from "./LandingSection.styles";

import { Column, Caption, Button, Text, SocialLinks } from "components";

const LandingSection: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Column>
          <Caption
            subtitle="Web / Mobile / Maker / Hacker"
            title="Software Engineer"
          />

          <div style={{ marginBottom: 30 }}>
            <Button>
              <Text.Body>Contact Me</Text.Body>
            </Button>
          </div>

          <SocialLinks />
        </Column>
      </Styled.Content>
    </Styled.Container>
  );
};

export default LandingSection;
