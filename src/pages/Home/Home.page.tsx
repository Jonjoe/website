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
        <Struct column>
          <Struct>
            <Struct>
              <Text.Heading5 inverted align="right">
                {parse(strings.INTRO_TITLE) as any}
              </Text.Heading5>
            </Struct>

            <Struct fixedWidth={30} />

            <Struct>
              <Text.Body inverted align="left">
                {parse(strings.INTRO_CONTENT) as any}
              </Text.Body>
            </Struct>
          </Struct>

          <Divider />

          <SocialLinks />
        </Struct>
      </Section>

      <Section title="Showcase" background={theme.pallet.BLUE}>
        <Struct column>
          <FeaturedProjects />
        </Struct>
      </Section>

      <Section title="History" background={theme.pallet.RED}>
        <WorkHistory />
      </Section>

      <Section title="Say Hi">
        <SocialLinks />
      </Section>
    </Page>
  );
};

export default HomePage;
