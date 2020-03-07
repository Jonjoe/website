import * as React from "react";
import * as Styled from "./FeaturedProjects.styled"
import projects from "data/projects.data";

import { FeaturedProject } from "components";
import { FProject } from "components/organisms/FeaturedProject/FeaturedProject.component";

const FeaturedProjects: React.FC = () => {
  return (
    <Styled.Container>
      {projects.map((project: FProject, index: number) => (
        <FeaturedProject project={project} key={index} />
      ))}
    </Styled.Container>
  );
};

export default FeaturedProjects;
