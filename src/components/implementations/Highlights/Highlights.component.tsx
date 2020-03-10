import * as React from "react";
import * as Styled from "./Highlights.styles";
import parse from "html-react-parser";

import { Text, Icon, Divider } from "components";

import workHistory from 'data/work.data'

interface HighlightsProps {
  accent: string;
}

const Highlights: React.FC<HighlightsProps> = props => {
  const { accent } = props;

  return (
    <Styled.Container>
      {workHistory.map(highlight => (
        <Styled.Entry>
          <Styled.Icon>
            <Icon name="scroll" color={accent} size="1rem" />
          </Styled.Icon>

          <Styled.InnerContainer logoUrl={highlight.logo}>
            <Styled.Header>
              <Styled.Title>
                <Text.Heading5 inverted>{highlight.name}</Text.Heading5>
                <Text.Body inverted>{highlight.role}</Text.Body>
              </Styled.Title>
              <Text.Body inverted>{highlight.duration}</Text.Body>
            </Styled.Header>

            <Divider left soft />

            <Styled.Content>
              <Text.Body inverted>
                {parse(highlight.description) as any}
              </Text.Body>
            </Styled.Content>

            <Styled.Footer>
              {highlight.tags.map(tag => (
                <Styled.Tag>
                  <Text.Inline>
                    <Icon name={tag.icon} />
                    {tag.label}
                  </Text.Inline>
                </Styled.Tag>
              ))}
            </Styled.Footer>
          </Styled.InnerContainer>
        </Styled.Entry>
      ))}
    </Styled.Container>
  );
};

export default Highlights;
