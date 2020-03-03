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

import { strings, theme } from "config";

const HomePage: React.FC = () => {
  return (
    <Page>
      <LandingSection />

      <Section background={theme.pallet.BLACK} title="Hello">
        <Struct>
          <Struct>
            <Text.Heading4 inverted>
              {parse(strings.INTRO_TITLE) as any}
            </Text.Heading4>
          </Struct>

          <Struct>
            <Text.Body inverted>
              {parse(strings.INTRO_CONTENT) as any}
            </Text.Body>
          </Struct>
        </Struct>
      </Section>

      <Section title="Showcase" background={theme.pallet.BLUE}>
        <FeaturedProjects />

        <Button>
          <Text.Body>Other Projects</Text.Body>
        </Button>
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
