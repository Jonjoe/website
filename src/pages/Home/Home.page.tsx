import * as React from "react";
import parse from "html-react-parser";

import {
  Button,
  Page,
  Section,
  SocialLinks,
  Text,
  Struct,
  SkillPoints,
  WorkHistory,
  FeaturedProjects,
  LandingSection
} from "../../components";

import { strings } from "../../config";

const HomePage: React.FC = () => {
  return (
    <Page>
      <LandingSection />
      <Section title="Hello">
          <Struct>
            <Struct>
              <Text.Heading4>{parse(strings.INTRO_TITLE) as any}</Text.Heading4>
            </Struct>
            <Struct fixedWidth={30} />
            <Struct>
              <Text.Body>{parse(strings.INTRO_CONTENT) as any}</Text.Body>
            </Struct>
          </Struct>
          <Struct>
            <SkillPoints />
          </Struct>
      </Section>

      <Section title="Showcase" background="#e0795f">
        <FeaturedProjects />

        <Button>
          <Text.Body>Other Projects</Text.Body>
        </Button>
      </Section>

      <Section title="History" background="#4a95d4">
        <WorkHistory />
      </Section>

      <Section title="Say Hi">
        <SocialLinks />
      </Section>
    </Page>
  );
};

export default HomePage;
