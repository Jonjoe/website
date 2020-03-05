import * as React from "react";

import projects from "data/projects.data";

import { FeaturedProject } from "components";
import { FProject } from "components/organisms/FeaturedProject/FeaturedProject.component";

const FeaturedProjects: React.FC = () => {
  return (
    <React.Fragment>
      {projects.map((project: FProject) => (
        <FeaturedProject project={project} />
      ))}
    </React.Fragment>
  );
};

export default FeaturedProjects;
