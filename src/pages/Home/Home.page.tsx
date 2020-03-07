import * as React from "react";
import { Waypoint } from "react-waypoint";
import parse from "html-react-parser";

import {
  Button,
  Page,
  Section,
  SkillPoints,
  Text,
  FeaturedProjects,
  Divider,
  Technologies,
  Card,
  CardGrid
} from "../../components";

import { strings, theme } from "config";

const HomePage: React.FC = () => {
  const [accent, setAccent] = React.useState(theme.pallet.BLACK);

  return (
    <Page accent={accent}>
      <Section>
        <Waypoint
          onEnter={() => setAccent(theme.pallet.BLACK)}
          bottomOffset={500}
        />
        <Text.Heading3 align="center">
          Web / Mobile / Maker / Hacker
        </Text.Heading3>
        <Text.Heading1 align="center">Jonjoe Whitfield</Text.Heading1>
        <SkillPoints />
      </Section>

      <Section background={theme.pallet.BLACK} title="Hello">
        <Text.Heading5 inverted align="center">
          {parse(strings.INTRO_ONE) as any}
        </Text.Heading5>

        <Divider />

        <Text.Heading6 inverted align="center">
          {parse(strings.INTRO_TWO) as any}
        </Text.Heading6>
      </Section>

      <Section title="Technologies">
        <Technologies />
      </Section>

      <Section title="Showcase" background={theme.pallet.BLUE}>
        <Waypoint
          onEnter={() => setAccent(theme.pallet.BLUE)}
          bottomOffset={500}
        />

        <FeaturedProjects />

        <Divider />
        <Button width="300px">View Other Projects</Button>
      </Section>
      
      <Section title="Highlights" background={theme.pallet.RED}>
        <Waypoint
          onEnter={() => setAccent(theme.pallet.BLUE)}
          bottomOffset={500}
        />

        <Divider />
        <Button width="300px">View Work History</Button>
      </Section>
    </Page>
  );
};

export default HomePage;
