import * as React from 'react';
import {
  Button,
  Page,
  Hatch,
  LandingSection,
  Caption,
  SocialLinks,
  Text
} from '../../components';

const HomePage: React.FC = () => {
  return (
    <Page>
      <Hatch />
      <LandingSection>
        <Caption /> 
        <Button>
          <Text.Body>Contact Me</Text.Body>
        </Button>

        <SocialLinks />
      </LandingSection>
    </Page>
  );
};

export default HomePage;
