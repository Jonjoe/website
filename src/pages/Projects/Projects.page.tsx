import * as React from "react";

import { Page, Section, FeaturedProjects } from "../../components";

const ProjectsPage: React.FC = () => {
  return (
    <Page locked={false}>
      <Section>
        <p>hi</p>
      </Section>
      <Section background="#4a95d4">
        <FeaturedProjects />
      </Section>
      <Section>
        <p>hi</p>
      </Section>
    </Page>
  );
};

export default ProjectsPage;
