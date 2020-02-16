import * as React from 'react';
import { Hatch, LandingSection, SocialLinks } from '../../components';

const HomePage: React.FC = () => {
    return (
    <main>
      <Hatch />
      <LandingSection>
        <h4>Product foced</h4>
        <h3>Software Engineer</h3>
        <SocialLinks />
      </LandingSection>
    </main>
  );
};

export default HomePage;
