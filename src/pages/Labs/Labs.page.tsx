import * as React from "react";
import { theme } from "config";
import { github } from "services";

import { Page, Section, UnderConstruction } from "components";

const LabsPage: React.FC = () => {
  const [repos, setRepos] = React.useState([]);
  const [reposLoading, setReposLoading] = React.useState(true);

  React.useEffect(() => {
    github
      .asyncGetRepos()
      .then(response => response.json())
      .then(data => {
        setRepos(data);
        setReposLoading(false);
      });
  }, []);

  return (
    <Page accent={theme.pallet.GREEN}>
      <Section title="Labs" accent={theme.pallet.GREEN}>
        {reposLoading ? (
          <p>Loading ...</p>
        ) : (
          repos.map((repo: any) => <p>{repo.name}</p>)
        )}
      </Section>
    </Page>
  );
};

export default LabsPage;
