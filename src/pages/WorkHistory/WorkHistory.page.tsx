import * as React from "react";
import { theme } from "config";
import { Page, Section } from "components";

const WorkHistoryPage: React.FC = () => {
  return (
    <Page accent={theme.pallet.RED}>
      <Section>
        <p>Hi</p>
      </Section>
      <Section>
        <p>Hi</p>
      </Section>
    </Page>
  );
};

export default WorkHistoryPage;
