import * as React from "react";
import { Waypoint } from "react-waypoint";

import parse from "html-react-parser";

import {
  Button,
  Page,
  Section,
  SkillPoints,
  Text,
  Struct,
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
        </Struct>
      </Section>

      <Section title="Showcase" background={theme.pallet.BLUE}>
        <Waypoint onEnter={() => console.log('hi')}>
          <Struct column centered>
            <FeaturedProjects />
            <Button>
              <Text.Body inverted align="center">
                View Other Projects
              </Text.Body>
            </Button>
          </Struct>
        </Waypoint>
      </Section>

      <Section title="Labs" background={theme.pallet.RED}>
        <Struct column centered>
          <Button>
            <Text.Body inverted align="center">
              View Other Labs
            </Text.Body>
          </Button>
        </Struct>
      </Section>
    </Page>
  );
};

export default HomePage;
