import * as React from "react";
import * as Styled from "./Card.styles";

import { Button, Text, Icon } from "components";
import { IconName } from "components/atoms/Icon/Icon.component";

interface CardProps {
  title: string;
  body: string;
  icon?: IconName;
  tags?: string[];
  actions?: any;
}

const Card: React.FC<CardProps> = props => {
  const { title, body, icon, tags, actions } = props;

  function renderIcon(icon?: IconName) {
    if (!icon) {
      return null;
    }

    return (
      <Styled.Header>
        <Icon name="folder" size="3.5rem" />
      </Styled.Header>
    );
  }

  function renderTags(tags?: string[]) {
    if (!tags) {
      return null;
    }

    return (
      <Styled.Tags>
        <Text.Body>javascript</Text.Body>
        <Text.Body>javascript</Text.Body>
        <Text.Body>javascript</Text.Body>
      </Styled.Tags>
    );
  }

  function renderActions(actions: any) {
    if (!actions) {
      return null;
    }

    return <Styled.Footer>{actions}</Styled.Footer>;
  }

  return (
    <Styled.Container hasTags={tags}>
      {renderIcon(icon)}

      <Styled.Content>
        <Text.Heading6 inverted>{title}</Text.Heading6>
        <Text.Body inverted>{body} </Text.Body>
      </Styled.Content>

      {renderActions(actions)}

      {renderTags(tags)}
    </Styled.Container>
  );
};

export default Card;
