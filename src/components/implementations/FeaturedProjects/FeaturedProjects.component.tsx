import * as React from "react";

import projects from "data/projects.data";

import { FeaturedProject } from "components";
import { FProject } from "components/organisms/FeaturedProject/FeaturedProject.component";

const FeaturedProjects: React.FC = () => {
  return (
    <div>
      {projects.map((project: FProject) => (
        <FeaturedProject project={project} />
      ))}
    </div>
  );
};

export default FeaturedProjects;
