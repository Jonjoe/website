import * as React from "react";
import { theme } from "config";
import { Page, Section, Button, Highlights } from "components";

const WorkHistoryPage: React.FC = () => {
  return (
    <Page accent={theme.pallet.RED}>
      <Section>
        <Button hero width="300px">
          View Full Work History
        </Button>
      </Section>

      <Section title="Highlights" accent={theme.pallet.RED}>
        <Highlights accent={theme.pallet.RED} />
      </Section>

      <Section>
        <Button hero width="300px">
          View Full Work History
        </Button>
      </Section>
    </Page>
  );
};

export default WorkHistoryPage;
