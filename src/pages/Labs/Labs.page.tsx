import * as React from "react";
import { theme } from "config";

import { Page, Section, Card, CardGrid, UnderConstruction } from "components";

const LabsPage: React.FC = () => {
  return (
    <Page accent={theme.pallet.GREEN}>
      <Section title="Labs" accent={theme.pallet.GREEN}>
        <UnderConstruction />
      </Section>
    </Page>
  );
};

export default LabsPage;
