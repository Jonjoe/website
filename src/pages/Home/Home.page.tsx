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
} from '../../components';

import strings from '../../strings';

const HomePage: React.FC = () => {
  const [ locked, setLocked ] = React.useState(true)

  return (
    <Page locked={locked}>
      <Hatch onOpen={() => setLocked(false)}/>
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
                <Text.Heading4>{parse(strings.INTRO_TITLE) as any}</Text.Heading4>
              </Struct>
              <Struct fixedWidth={30} />
              <Struct>
                <Text.Body>{parse(strings.INTRO_CONTENT) as any}</Text.Body>
              </Struct>
            </Struct>
          </ScrollAnimation>
        </Section>

        <Section title="What Ive Done" background="#4a95d4">
          <Text.Body>Content</Text.Body>
        </Section>

        <Section title="Projects" background="#e0795f">
          <Text.Body>Content</Text.Body>
        </Section>

        <Section title="Say Hi!">
          <SocialLinks />
        </Section>
      </HomeContentColumn>
    </Page>
  );
};

export default HomePage;
