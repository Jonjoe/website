import * as React from "react";
import * as Styled from "./Card.styles";

import { Text, Icon } from "components";
import { IconName } from "components/atoms/Icon/Icon.component";

interface CardProps {
  title: string;
  body: string;
  icon?: IconName;
  actions?: React.ReactNode;
}

function Card(props: CardProps) {
  const { title, body, icon, actions } = props;

  function renderIcon(icon?: IconName) {
    if (!icon) {
      return null;
    }

    return (
      <Styled.Header>
        <Icon name={icon} size="3.5rem" />
      </Styled.Header>
    );
  }


  function renderActions(actions: any) {
    if (!actions) {
      return null;
    }

    return <Styled.Footer>{actions}</Styled.Footer>;
  }

  return (
    <Styled.Container>
      {renderIcon(icon)}

      <Styled.Content>
        <Text.Heading6 inverted>{title}</Text.Heading6>
        <Text.Body inverted>{body} </Text.Body>
      </Styled.Content>

      {renderActions(actions)}
    </Styled.Container>
  );
};

export default Card as React.FC<CardProps>;
