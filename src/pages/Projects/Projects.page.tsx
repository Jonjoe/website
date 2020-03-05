import * as React from "react";
import { theme } from 'config'

import { Page, Section, Card, CardGrid } from "components";

const ProjectsPage: React.FC = () => {
  return (
    <Page accent={theme.pallet.BLUE}>
      <Section title="Projects" background={theme.pallet.BLUE}>
        <CardGrid>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardGrid>
      </Section>
    </Page>
  );
};

export default ProjectsPage;
