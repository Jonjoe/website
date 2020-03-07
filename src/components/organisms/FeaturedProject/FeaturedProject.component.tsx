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
      <Styled.Content>
        <Styled.Header>
          <Text.Heading5 inverted>{project.name}</Text.Heading5>
        </Styled.Header>

        <Text.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text.Body>

        <Button>View Code</Button>
        <Button>View Project</Button>

        <Styled.Tags>
          {project.tags.map((tag: string, index: number) => (
            <Styled.Tag>
              <Text.Inline key={index}>{tag}</Text.Inline>
            </Styled.Tag>
          ))}
        </Styled.Tags>
      </Styled.Content>

      <Styled.Image image={project.image} />
    </Styled.Container>
  );
};

export default FeaturedProject;
