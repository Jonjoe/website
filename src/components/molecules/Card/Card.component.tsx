import * as React from "react";
import * as Styled from "./Card.styles";

import { Text, Icon } from "components";
import { IconName } from "components/atoms/Icon/Icon.component";

interface CardProps {
  title: string;
  body: string;
  icon?: IconName;
  externalLink?: string;
  actions?: React.ReactNode;
}

function Card(props: CardProps) {
  const { title, body, icon, actions, externalLink } = props;

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
    if (!actions) return null;

    return <Styled.Footer>{actions}</Styled.Footer>
  }

  function renderExternalLink(linkUrl?: string) {
    if (!linkUrl) return null;

    return (
      <Styled.ExternalLinkIcon onClick={() => window.open(linkUrl)}>
        <Icon name="github" />
      </Styled.ExternalLinkIcon>
    );
  }

  return (
    <Styled.Container>
      {renderIcon(icon)}
      {renderExternalLink(externalLink)}

      <Styled.Content>
        <Text.Heading6 align="center" inverted>
          {title}
        </Text.Heading6>
        <Text.Body align="center" inverted>
          {body}
        </Text.Body>
      </Styled.Content>

      {renderActions(actions)}
    </Styled.Container>
  );
}

export default Card as React.FC<CardProps>;
