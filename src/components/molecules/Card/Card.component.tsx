import * as React from "react";
import * as Styled from "./Card.styles";

import { Button, Text, Icon } from "components";

const Card: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Icon name="folder" size="3.5rem" />
      </Styled.Header>

      <Styled.Content>
        <Text.Heading6 inverted>This is the body title</Text.Heading6>
        <Text.Body inverted>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Text.Body>
      </Styled.Content>

      <Styled.Footer>
        <Button>View Project</Button>
        <Button>View Code </Button>
      </Styled.Footer>

      <Styled.Tags>
        <Text.Body>javascript</Text.Body>
        <Text.Body>javascript</Text.Body>
        <Text.Body>javascript</Text.Body>
      </Styled.Tags>
    </Styled.Container>
  );
};

export default Card;
