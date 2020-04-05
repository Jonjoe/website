import React, { useState, useEffect } from "react";

import { theme, apiKeys } from "config";
import { googleDrive } from "services";

import { Page, Section, Button, CardGrid, Card, Loading } from "components";

const CvsPage: React.FC = () => {
  const [cvs, setCvs] = useState([]);
  const [cvsLoading, setCvsLoading] = useState(true);
  const [loaderActive, setLoaderActive] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoaderActive(false), 750);
    
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
        <Button href={downloadPdf}>View Document</Button>
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
        {(cvsLoading || loaderActive) ? (
          <Loading accent={theme.pallet.BLACK} />
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
