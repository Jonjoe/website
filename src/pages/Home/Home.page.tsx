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
  const [accent, setAccent] = React.useState(theme.pallet.BLACK)
  
  return (
    <Page accent={accent}>
      <Section>
        <Waypoint onEnter={() => setAccent(theme.pallet.BLACK)} bottomOffset={500} />
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
        <Waypoint onEnter={() => setAccent(theme.pallet.BLUE)} bottomOffset={500} />

        <Struct column centered>
          <FeaturedProjects />
          <Button>
            <Text.Body inverted align="center">
              View Other Projects
            </Text.Body>
          </Button>
        </Struct>
      </Section>

      <Section title="Labs" background={theme.pallet.RED}>
        <Waypoint onEnter={() => setAccent(theme.pallet.RED)} bottomOffset={500} />
        <Struct fixedHeight={1000} />
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
