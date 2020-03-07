import React from "react";
import * as Styled from "./FeaturedProject.styles";
import { theme } from "config";

import { Icon, Text, Button } from "components";

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
      <Styled.Header>
        <Text.Heading5 inverted align="center">
          {project.name}
        </Text.Heading5>
      </Styled.Header>

      <Styled.Content>
        <Text.Body align="center" inverted>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text.Body>
      </Styled.Content>

      <Styled.Actions>
        <Icon name="view" />
        <Icon name="github" />
      </Styled.Actions>

      <Styled.Image image={project.image} />

      <Styled.Tags>
        <Icon name="nodejs" />
        <Icon name="react" />
        <Icon name="aws" />
      </Styled.Tags>
    </Styled.Container>
  );
};

export default FeaturedProject;
