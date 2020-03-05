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

        <Text.Heading5 inverted align="center">
          {parse(strings.INTRO_TWO) as any}
        </Text.Heading5>
      </Section>

      <Section title="Showcase" background={theme.pallet.BLUE}>
        <Waypoint
          onEnter={() => setAccent(theme.pallet.BLUE)}
          bottomOffset={500}
        />

        <FeaturedProjects />
        <Button>View Other Projects</Button>
      </Section>

      <Section title="Labs" background={theme.pallet.RED}>
        <Waypoint
          onEnter={() => setAccent(theme.pallet.RED)}
          bottomOffset={500}
        />
        <CardGrid>
          {Array(10)
            .fill("")
            .map((item: any) => (
              <Card />
            ))}
        </CardGrid>
        <Divider />
        <Button width="300px">View Other Labs</Button>
      </Section>
    </Page>
  );
};

export default HomePage;
