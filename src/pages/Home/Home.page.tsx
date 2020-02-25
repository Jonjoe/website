import * as React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import parse from 'html-react-parser';

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
  HomeContentColumn,
  Struct,
  SkillPoints,
  WorkHistory,
} from '../../components';

import {strings} from '../../config';

const HomePage: React.FC = () => {
  return (
    <Page locked={false}>
      <HomeContentColumn>
        <LandingSection>
          <ScrollAnimation animateIn="fadeIn">
            <Column>
              <Caption
                subtitle="Web / Mobile / Maker / Hacker"
                title="Software Engineer"
              />

              <div style={{marginBottom: 30}}>
                <Button>
                  <Text.HeroBody>Contact Me</Text.HeroBody>
                </Button>
              </div>

              <SocialLinks />
            </Column>
          </ScrollAnimation>
        </LandingSection>

        <Section title="Hello">
          <ScrollAnimation animateIn="fadeIn">
            <Struct>
              <Struct>
                <Text.Heading4>
                  {parse(strings.INTRO_TITLE) as any}
                </Text.Heading4>
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

        <Section title="Projects" background="#e0795f">
          <Text.Body>Content</Text.Body>
        </Section>

        <Section title="History" background="#4a95d4">
          <WorkHistory />
        </Section>

        <Section title="Say Hi!">
          <SocialLinks />
        </Section>
      </HomeContentColumn>
    </Page>
  );
};

export default HomePage;
