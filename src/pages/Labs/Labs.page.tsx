import * as React from "react";
import { theme } from 'config'

import { Page, Section, Card, CardGrid } from "components";

const LabsPage: React.FC = () => {
  return (
    <Page accent={theme.pallet.GREEN}>
      <Section title="Labs" background={theme.pallet.GREEN}>
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
