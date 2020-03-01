import * as React from "react";

import { Page, Section, Card, CardGrid } from "components";

const ProjectsPage: React.FC = () => {
  return (
    <Page>
      <Section>
        <p>hi</p>
      </Section>

      <Section background="#4a95d4">
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

      <Section>
        <p>hi</p>
      </Section>
    </Page>
  );
};

export default ProjectsPage;
