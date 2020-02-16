import * as React from 'react';
import {
  Button,
  Page,
  Hatch,
  Section,
  LandingSection,
  Caption,
  SocialLinks,
  Text,
  HomeContentColumn,
  Struct,
  SkillPoints
} from '../../components';

const HomePage: React.FC = () => {
  return (
    <Page>
      <Hatch />
      <HomeContentColumn>
        <LandingSection>
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
        </LandingSection>

        <Section title="About Jonjoe">
          <Struct>
            <SkillPoints />
          </Struct>
          <Struct>
            <Struct>
              <Text.Heading4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text.Heading4>
            </Struct>
            <Struct>
              <Text.Body>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Text.Body>
            </Struct>
          </Struct>
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
