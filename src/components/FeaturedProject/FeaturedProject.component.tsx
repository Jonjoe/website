import React from "react";
import * as Styled from "./FeaturedProject.styles";

import { Text, TechCard } from "..";
import { IconName } from "../Icon/Icon.component";

export interface FProject {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
}

export interface Tag {
  label: string;
  icon: IconName;
}

interface FeaturedProjectProps {
  project: FProject;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = props => {
  const { project } = props;

  return (
    <Styled.Container>
      <Styled.Content>
        <Text.Heading5>{project.name}</Text.Heading5>

        <Styled.ContentBody>
          <Text.Body>{project.description}</Text.Body>
        </Styled.ContentBody>

        <Styled.Tags>
          {project.tags.map((tag: Tag) => (
            <TechCard label={tag.label} icon={tag.icon} />
          ))}
        </Styled.Tags>
      </Styled.Content>
      <Styled.Image />
    </Styled.Container>
  );
};

export default FeaturedProject;
