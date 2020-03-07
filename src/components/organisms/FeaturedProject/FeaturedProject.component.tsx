import React from "react";
import * as Styled from "./FeaturedProject.styles";

import { Text, Button } from "components";

export interface FProject {
  name: string;
  description: string;
  tags: string[];
  image: string;
}

interface FeaturedProjectProps {
  project: FProject;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = props => {
  const { project } = props;

  return (
    <Styled.Container>
      <Styled.Image image={project.image} />
    </Styled.Container>
  );
};

export default FeaturedProject;
