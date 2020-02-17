import * as React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
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
} from '../../components';

import strings from '../../strings';

const HomePage: React.FC = () => {
  return (
    <Page>
      <Hatch />
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

        <Section title="About Jonjoe">
          <ScrollAnimation animateIn="fadeIn">
            <Struct>
              <SkillPoints />
            </Struct>
            <Struct>
              <Struct>
                <Text.Heading4>{strings.INTRO_TITLE}</Text.Heading4>
              </Struct>
              <Struct fixedWidth={30} />
              <Struct>
                <Text.Body>{strings.INTRO_CONTENT}</Text.Body>
              </Struct>
            </Struct>
          </ScrollAnimation>
        </Section>

        <Section title="Experience" background="#4a95d4">
          <p>Content</p>
        </Section>

        <Section title="Projects" background="#e0795f">
          <p>Content</p>
        </Section>

        <Section title="Say Hi!">
          <SocialLinks />
        </Section>
      </HomeContentColumn>
    </Page>
  );
};

export default HomePage;
