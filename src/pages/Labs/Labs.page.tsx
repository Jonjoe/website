import * as React from "react";
import { theme } from 'config'

import { Page, Section, Card, CardGrid } from "components";

const LabsPage: React.FC = () => {
  return (
    <Page accent={theme.pallet.RED}>
      <Section title="Labs" background={theme.pallet.RED}>
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

export default LabsPage;
