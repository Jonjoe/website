import React from "react";
import * as Styled from "./FeaturedProject.styles";

import { Text, TechCard } from "components";

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
      <Styled.Content>
        <Text.Heading5 inverted>{project.name}</Text.Heading5>

        <Styled.ContentBody>
          <Text.Body inverted>{project.description}</Text.Body>
        </Styled.ContentBody>

        <Styled.Tags>
          {project.tags.map((tag: string) => (
            <Text.Body>{tag}</Text.Body>
          ))}
        </Styled.Tags>
      </Styled.Content>

      <Styled.Image image={project.image}/>
    </Styled.Container>
  );
};

export default FeaturedProject;
