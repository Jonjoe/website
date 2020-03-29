import * as React from "react";

import { theme, apiKeys } from "config";
import { googleDrive } from "services";

import { Page, Section, Text, Button, CardGrid, Card } from "components";

const CvsPage: React.FC = () => {
  const [cvs, setCvs] = React.useState([]);
  const [cvsLoading, setCvsLoading] = React.useState(true);

  React.useEffect(() => {
    googleDrive.asyncLsFolder(apiKeys.GOOGLE_FOLDER_ID).then(data => {
      setCvs(data.files);
      setCvsLoading(false);
    });
  }, []);

  function cleanFileName(fileName: string): string {
    const delimiter = "_";
    return fileName.split(delimiter).slice(-1)[0];
  }

  function renderActions(downloadPdf: string) {
    return (
      <React.Fragment>
        <Button href={downloadPdf}>Download PDF</Button>
      </React.Fragment>
    );
  }

  return (
    <Page accent={theme.pallet.BLACK}>
      <Section
        title="My CVs"
        subtitle="My Specialised CVs"
        accent={theme.pallet.BLACK}
      >
        {cvsLoading ? (
          <Text.Body inverted>Loading ...</Text.Body>
        ) : (
          <CardGrid>
            {cvs.map((cv: any) => {
              return (
                <Card
                  icon="file"
                  key={cv.id}
                  title={cleanFileName(cv.name)}
                  body={cv.description}
                  actions={renderActions(cv.webViewLink)}
                />
              );
            })}
          </CardGrid>
        )}
      </Section>
    </Page>
  );
};

export default CvsPage;
