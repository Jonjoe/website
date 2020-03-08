import * as React from "react";
import { theme } from "config";
import { Page, Section, UnderConstruction } from "components";

const WorkHistoryPage: React.FC = () => {
  return (
    <Page accent={theme.pallet.RED}>
      <Section background={theme.pallet.RED}>
        <UnderConstruction />
      </Section>
    </Page>
  );
};

export default WorkHistoryPage;
