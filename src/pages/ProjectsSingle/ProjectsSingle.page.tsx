import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";

import { github } from "services";
import { theme, constants } from "config";

import { Page, Section, Text, Loading } from "components";

const ProjectsPage: React.FC = () => {
  const params = useParams<{ id: string }>();

  const [repo, setRepo] = useState();
  const [repoLoading, setRepoLoading] = useState<boolean>(true);
  const [repoError, setRepoError] = useState<boolean>(false);
  const [loaderActive, setLoaderActive] = useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => setLoaderActive(false), 750);

    github.asyncGetRepos().then(data => {
      const repo = findRepoById(data, params.id)[0];

      if (repo) {
        setRepo(repo);
        setRepoLoading(false);
      } else {
        setRepoError(true);
      }
    });
  }, []);

  function findRepoById(repos: any[], id: string): any[] {
    return repos.filter(repo => Number(repo.id) === Number(id));
  }

  if (repoError) {
    return <Redirect to={constants.routes.PROJECTS} />;
  }

  console.log(repo)

  return (
    <Page accent={theme.pallet.BLUE}>
      {repoLoading || loaderActive ? (
        <Section accent={theme.pallet.BLUE}>
          <Loading accent={theme.pallet.BLUE} />
        </Section>
      ) : (
        <Section
          title={repo.name}
          />
      )}
    </Page>
  );
};

export default ProjectsPage;
