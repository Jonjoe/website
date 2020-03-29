import * as React from "react";
import { capitalize } from "lodash";

import { github } from "services";
import { theme } from "config";

import { Page, Button, Text, Section, CardGrid, Card } from "components";

const ProjectsPage: React.FC = () => {
  const [repos, setRepos] = React.useState<any[]>([]);
  const [reposLoading, setReposLoading] = React.useState(true);

  React.useEffect(() => {
    github.asyncGetRepos().then(data => {
      setRepos(data);
      setReposLoading(false);
    });
  }, []);

  function filterReposByTag(repos: any[], tag: string): any[] {
    return repos.filter(repo => repo.topics.includes(tag));
  }

  function decorateTitle(title: string): string {
    return title
      .split("-")
      .map(word => capitalize(word))
      .join(" ");
  }

  function renderActions(githubUrl: string): JSX.Element {
    return (
      <React.Fragment>
        <Button href={githubUrl}>View Demo</Button>;
        <Button href={githubUrl}>View on Github</Button>;
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
        {reposLoading && <Text.Body>Loading ...</Text.Body>}

        <CardGrid>
          {filterReposByTag(repos, "project").map(repo => (
            <Card
              key={repo.id}
              title={decorateTitle(repo.name)}
              body={repo.description}
              icon={"github"}
              actions={renderActions(repo.html_url)}
            />
          ))}
        </CardGrid>
      </Section>
    </Page>
  );
};

export default ProjectsPage;
