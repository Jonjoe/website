import * as React from "react";
import * as Styled from "./Card.styles";

import { Text, Icon } from "components";
import { IconName } from "components/atoms/Icon/Icon.component";

interface CardProps {
  title: string;
  body: string;
  icon?: IconName;
  labels?: string[];
  externalLink?: string;
  actions?: React.ReactNode;
}

function Card(props: CardProps) {
  const { title, body, icon, labels, actions, externalLink } = props;

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

  function renderExternalLink(linkUrl?: string) {
    if (!linkUrl) return null;

    return (
      <Styled.ExternalLinkIcon onClick={() => window.open(linkUrl)}>
        <Icon name="github" />
      </Styled.ExternalLinkIcon>
    );
  }

  function renderLabels(labels: string[]): JSX.Element {
    return (
      <Styled.Labels>
        {labels.map((label: string, index: number) => (
          <Text.Body key={index} align="center">
            {label}
          </Text.Body>
        ))}
      </Styled.Labels>
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

      <Styled.Footer>
        {labels && renderLabels(labels)}
        {actions && actions}
      </Styled.Footer>
    </Styled.Container>
  );
}

export default Card as React.FC<CardProps>;
