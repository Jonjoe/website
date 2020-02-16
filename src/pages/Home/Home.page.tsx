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
} from '../../components';

const HomePage: React.FC = () => {
  return (
    <Page>
      <Hatch />
      <HomeContentColumn>
        <LandingSection>
          <Caption subtitle="Web / Mobile / Maker / Hacker" title="Software Engineer"/>

          <Button>
            <Text.Body>Contact Me</Text.Body>
          </Button>

          <SocialLinks />
        </LandingSection>

        <Section title="About Jonjoe">
          <p>Content</p>
        </Section>
      </HomeContentColumn>
    </Page>
  );
};

export default HomePage;
