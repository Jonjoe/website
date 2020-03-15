import * as React from "react";
import parse from "html-react-parser";

import { ROUTES } from "routes";
import { strings, theme, constants } from "config";

import { Waypoint } from "react-waypoint";
import {
  Button,
  ButtonRow,
  Page,
  Section,
  SkillPoints,
  Struct,
  Text,
  Divider,
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

        <ButtonRow>
          <Button hero width="300px" to={ROUTES.CV}>
            My CV
          </Button>

          <Button hero width="300px" href={constants.links.LINKEDIN}>
            Contact Me
          </Button>
        </ButtonRow>

        <SkillPoints />
      </Section>

      <Section accent={theme.pallet.BLACK} title="Hello">
        <Struct centered column>
          <Text.Heading5 inverted align="center">
            {parse(strings.INTRO) as any}
          </Text.Heading5>
        </Struct>
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

      <Section
        title="Highlights"
        subtitle="Some of my favoriate contracts"
        accent={theme.pallet.RED}
      >
        <Waypoint
          onEnter={() => setAccent(theme.pallet.RED)}
          bottomOffset={500}
        />
        <Highlights accent={accent} />
        <Divider />
        <Struct centered>
          <Text.Body align="center" inverted>
            {strings.BULLSHIT_DISCLAIMER}
          </Text.Body>
        </Struct>
      </Section>
    </Page>
  );
};

export default HomePage;
