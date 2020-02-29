import * as React from "react";

import projects from "../../data/projects.data";
import FeaturedProject, {
  FProject
} from "../FeaturedProject/FeaturedProject.component";

const FeaturedProjects: React.FC = props => {
  return (
    <div>
      {projects.map((project: FProject) => (
        <FeaturedProject project={project} />
      ))}
    </div>
  );
};

export default FeaturedProjects;
