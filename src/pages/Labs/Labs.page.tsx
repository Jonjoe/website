import React, { useState } from "react";
import { capitalize } from "lodash";

import { github } from "services";
import { theme } from "config";

import { selectTagFromRepos } from "selectors";

import {
  Page,
  Button,
  Section,
  CardGrid,
  Card,
  Loading
} from "components";

function ProjectsPage() {
  const [repos, setRepos] = useState<any[]>([]);
  const [reposLoading, setReposLoading] = useState<boolean>(true);
  const [loaderActive, setLoaderActive] = useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => setLoaderActive(false), 750);

    github.asyncGetRepos().then(data => {
      setRepos(data);
      setReposLoading(false);
    });
  }, []);

  function decorateTitle(title: string): string {
    return title
      .split("-")
      .map(word => capitalize(word))
      .join(" ");
  }

  function renderActions(websiteUrl: string): JSX.Element {
    return (
      <React.Fragment>
        <Button href={websiteUrl}>View Demo</Button>
      </React.Fragment>
    );
  }

  return (
    <Page accent={theme.pallet.GREEN}>
      <Section
        title="Labs"
        subtitle="View my hacks and hobby projects here."
        accent={theme.pallet.GREEN}
      >
        {reposLoading || loaderActive ? (
          <Loading accent={theme.pallet.GREEN} />
        ) : (
          <CardGrid animated>
            {selectTagFromRepos(repos, "lab").map(repo => (
              <Card
                key={repo.id}
                title={decorateTitle(repo.name)}
                body={repo.description}
                icon={"lab"}
                externalLink={repo.html_url}
                actions={renderActions(repo.website)}
              />
            ))}
          </CardGrid>
        )}
      </Section>
    </Page>
  );
}

export default ProjectsPage as React.FC;
