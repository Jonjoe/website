import React from "react";
import * as Styled from "./FeaturedProject.styles";

import { Icon, Text } from "components";

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
    <Styled.OuterContainer>
      <Styled.Container>
        <Styled.Header>
          <Text.Heading5 inverted align="center">
            {project.name}
          </Text.Heading5>
        </Styled.Header>

        <Styled.Content>
          <Text.Body align="center" inverted>
            {project.description}
          </Text.Body>
        </Styled.Content>

        <Styled.Image image={project.image} />

        <Styled.Tags>
          <Icon name="nodejs" />
          <Icon name="react" />
          <Icon name="aws" />
        </Styled.Tags>
      </Styled.Container>

      <Styled.IconRow>
        <Styled.Icon>
          <Icon name="project" />
        </Styled.Icon>
      </Styled.IconRow>
    </Styled.OuterContainer>
  );
};

export default FeaturedProject;
