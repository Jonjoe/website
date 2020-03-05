import * as React from "react";
import parse from "html-react-parser";

import {
  Button,
  Page,
  Section,
  SocialLinks,
  SkillPoints,
  Text,
  Struct,
  WorkHistory,
  FeaturedProjects,
  Divider
} from "../../components";

import { strings, theme } from "config";

const HomePage: React.FC = () => {
  return (
    <Page>
      <Section>
        <Struct column>
          <Text.Heading3 align="center">
            Web / Mobile / Maker / Hacker
          </Text.Heading3>

          <Text.Heading1 align="center">Jonjoe Whitfield</Text.Heading1>
          <SkillPoints />
        </Struct>
      </Section>

      <Section background={theme.pallet.BLACK} title="Hello">
        <Struct column centered>
          <Text.Heading5 inverted align="center">
            {parse(strings.INTRO_ONE) as any}
          </Text.Heading5>

          <Divider />

          <Text.Heading5 inverted align="center">
            {parse(strings.INTRO_TWO) as any}
          </Text.Heading5>

          <Divider />

          <SocialLinks />
        </Struct>
      </Section>

      <Section title="Showcase" background={theme.pallet.BLUE}>
        <Struct column>
          <FeaturedProjects />
        </Struct>
      </Section>
    </Page>
  );
};

export default HomePage;
