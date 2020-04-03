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

const ProjectsPage: React.FC = () => {
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
    <Page accent={theme.pallet.BLUE}>
      <Section
        title="Projects"
        subtitle="Things that I am working on or have worked on in the past."
        accent={theme.pallet.BLUE}
      >
        {reposLoading || loaderActive ? (
          <Loading accent={theme.pallet.BLUE} />
        ) : (
          <CardGrid animated>
            {selectTagFromRepos(repos, "project").map(repo => (
              <Card
                key={repo.id}
                title={decorateTitle(repo.name)}
                body={repo.description}
                icon={"rocket"}
                externalLink={repo.html_url}
                actions={renderActions(repo.website)}
              />
            ))}
          </CardGrid>
        )}
      </Section>
    </Page>
  );
};

export default ProjectsPage;
