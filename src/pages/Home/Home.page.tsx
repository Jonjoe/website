import * as React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import parse from "html-react-parser";

import {
  Button,
  Page,
  Hatch,
  Section,
  LandingSection,
  Caption,
  Column,
  SocialLinks,
  Text,
  Struct,
  SkillPoints,
  WorkHistory,
  FeaturedProjects
} from "../../components";

import { strings } from "../../config";

const HomePage: React.FC = () => {
  return (
    <Page locked={false}>

      <Section title="Hello">
        <ScrollAnimation animateIn="fadeIn">
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
        </ScrollAnimation>
      </Section>

      <Section title="Showcase" background="#e0795f">
        <FeaturedProjects />

        <Button>
          <Text.HeroBody>Other Projects</Text.HeroBody>
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
