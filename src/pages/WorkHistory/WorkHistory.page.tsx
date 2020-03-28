import * as React from "react";

import { social } from "app-constants";
import { theme } from "config";

import { Page, Section, Button, Highlights } from "components";

const WorkHistoryPage: React.FC = () => {
  return (
    <Page accent={theme.pallet.RED}>
      <Section>
        <Button hero href={social.LINKEDIN} width="300px">
          View Full Work History
        </Button>
      </Section>

      <Section title="Highlights" accent={theme.pallet.RED}>
        <Highlights />
      </Section>

      <Section>
        <Button hero href={social.LINKEDIN} width="300px">
          View Full Work History
        </Button>
      </Section>
    </Page>
  );
};

export default WorkHistoryPage;
