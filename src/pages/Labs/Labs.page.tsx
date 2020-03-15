import * as React from "react";
import { theme } from "config";
import { github } from "services";

import { Text, Button, Card, CardGrid, Filter, Struct, UnderConstruction } from "components";

import { Page, Section } from "components";

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

  function renderLoading() {
    return <Text.Body inverted>Loading ...</Text.Body>;
  }

  function renderCards(repos: any) {
    return (
      <CardGrid>
        {repos.map((repo: any) => (
          <Card
            title={repo.name}
            body={repo.description || ""}
            icon="lab"
            actions={
              <React.Fragment>
                <Button>View Demo</Button>
                <Button>View Code</Button>
              </React.Fragment>
            }
          />
        ))}
      </CardGrid>
    );
  }

  return (
    <Page accent={theme.pallet.GREEN}>
      <Section
        title="Labs"
        accent={theme.pallet.GREEN}
        subtitle="View my hacks, hobby and utility projects"
      >
       
        <UnderConstruction />
      </Section>
    </Page>
  );
};

export default LabsPage;
