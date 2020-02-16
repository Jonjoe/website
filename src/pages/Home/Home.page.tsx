import * as React from 'react';
import {
  Button,
  Page,
  Hatch,
  LandingSection,
  SocialLinks,
  Text
} from '../../components';

const HomePage: React.FC = () => {
  return (
    <Page>
      <Hatch />
      <LandingSection>
        <div>
          <Text.Heading3>Holistic / Maker</Text.Heading3>
          <Text.Heading2>Software Engineer</Text.Heading2>
        </div>

        <Button>
          <Text.Body>Contact Me</Text.Body>
        </Button>

        <SocialLinks />
      </LandingSection>
    </Page>
  );
};

export default HomePage;
