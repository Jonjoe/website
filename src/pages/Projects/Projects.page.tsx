import * as React from "react";
import { theme } from "config";

import { Page, Section, UnderConstruction } from "components";

const ProjectsPage: React.FC = () => {
  return (
    <Page accent={theme.pallet.BLUE}>
      <Section title="Projects" accent={theme.pallet.BLUE}>
        <UnderConstruction />
      </Section>
    </Page>
  );
};

export default ProjectsPage;
