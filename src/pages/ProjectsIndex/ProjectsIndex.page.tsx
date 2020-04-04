import React, { useState } from "react";
import { capitalize } from "lodash";

import { github } from "services";
import { theme, constants } from "config";

import { Page, Button, Section, CardGrid, Card, Loading } from "components";

function ProjectsIndexPage(): JSX.Element {
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

  function filterReposByTags(repos: any[]): any[] {
    return repos.filter(repo => {
      const { topics } = repo;
      return topics.includes("project") || topics.includes("lab");
    });
  }

  function decorateTitle(title: string): string {
    return title
      .split("-")
      .map(word => capitalize(word))
      .join(" ");
  }

  function renderActions(projectId: string): JSX.Element {
    const route = `${constants.routes.PROJECTS}/${projectId}`;
    return (
      <React.Fragment>
        <Button to={route}>View Project</Button>
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
            {filterReposByTags(repos).map(repo => (
              <Card
                key={repo.id}
                title={decorateTitle(repo.name)}
                body={repo.description}
                icon={"rocket"}
                labels={repo.topics}
                actions={renderActions(repo.id)}
              />
            ))}
          </CardGrid>
        )}
      </Section>
    </Page>
  );
}

export default ProjectsIndexPage as React.FC;
