import * as React from "react";
import parse from "html-react-parser";
import { strings, theme } from "config";

import { Waypoint } from "react-waypoint";
import {
  Button,
  Page,
  Section,
  SkillPoints,
  Text,
  Technologies,
  FeaturedProject,
  Highlights
} from "../../components";

import { FProject } from "components/implementations/FeaturedProject/FeaturedProject.component";
import projects from "data/projects.data";

const HomePage: React.FC = () => {
  const [accent, setAccent] = React.useState<string>(theme.pallet.BLACK);

  return (
    <Page accent={accent}>
      <Section>
        <Waypoint
          onEnter={() => setAccent(theme.pallet.BLACK)}
          bottomOffset={500}
        />
        <Text.Heading1 align="center">Jonjoe Whitfield</Text.Heading1>

        <Text.Heading3 align="center">
          Web / Mobile / Maker / Hacker
        </Text.Heading3>

        <Button hero width="300px" href={strings.links.LINKEDIN}>
          Contact Me
        </Button>

        <SkillPoints />
      </Section>

      <Section accent={theme.pallet.BLACK} title="Hello">
        <Text.Heading5 inverted align="center">
          {parse(strings.INTRO_ONE) as any}
        </Text.Heading5>
      </Section>

      <Section title="Technologies">
        <Waypoint
          onEnter={() => setAccent(theme.pallet.BLACK)}
          bottomOffset={500}
        />

        <Technologies />
      </Section>

      <Section title="Showcase" accent={theme.pallet.BLUE}>
        <Waypoint
          onEnter={() => setAccent(theme.pallet.BLUE)}
          bottomOffset={500}
        />

        <React.Fragment>
          {projects.map((project: FProject, index: number) => (
            <FeaturedProject project={project} key={index} />
          ))}
        </React.Fragment>
      </Section>

      <Section title="Highlights" accent={theme.pallet.RED}>
        <Waypoint
          onEnter={() => setAccent(theme.pallet.RED)}
          bottomOffset={500}
        />

        <Highlights accent={accent} />
      </Section>
    </Page>
  );
};

export default HomePage;
