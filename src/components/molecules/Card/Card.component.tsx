import * as React from "react";
import * as Styled from "./Card.styles";

import { Text, Icon, Tags } from "components";

const Card: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Icon name="folder" />
        <Text.Heading4>This is the card title</Text.Heading4>
      </Styled.Header>
      <Styled.Content>
        <Text.Heading5>This is the body title</Text.Heading5>
        <Text.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Text.Body>
        <Tags tags={["javascript", "node", "aws"]} />
      </Styled.Content>
    </Styled.Container>
  );
};

export default Card;
