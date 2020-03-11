import * as React from "react";
import FlipMove from "react-flip-move";

import * as Styled from "./Highlights.styles";
import parse from "html-react-parser";

import { constants } from "config";

import { Text, Icon, Divider } from "components";

import highlights, { Job, JobTag } from "data/work.data";

interface HighlightsProps {
  accent: string;
}

const Highlights: React.FC<HighlightsProps> = props => {
  const { accent } = props;

  const [selectedTag, setSelectedTag] = React.useState("");

  function containsSelectedTag(highlight: Job, filterTag: string) {
    if (filterTag === "") {
      console.log("blank");
      return true;
    }

    const matchingHighlightTags = highlight.tags.filter(
      (highlightTag: JobTag) => highlightTag.id === filterTag
    );

    return matchingHighlightTags.length > 0;
  }

  const filteredHighlights = highlights.filter(highlight =>
    containsSelectedTag(highlight, selectedTag)
  );

  const cleanSelectedTag = selectedTag === "" ? "All" : selectedTag;

  return (
    <Styled.Container>
      <Text.Heading6 inverted>
        {filteredHighlights.length + 1} Highlights
      </Text.Heading6>

      <Styled.FilterContainer>
        <Styled.Filter
          active={selectedTag === ""}
          onClick={() => setSelectedTag("")}
        >
          <Text.Body align="center">All</Text.Body>
        </Styled.Filter>

        {Object.values(constants.techLabels).map(label => (
          <Styled.Filter
            active={selectedTag === label}
            onClick={() => setSelectedTag(label)}
          >
            <Text.Body align="center">{label}</Text.Body>
          </Styled.Filter>
        ))}
      </Styled.FilterContainer>

      <Divider />

      <Text.Heading5 inverted>{cleanSelectedTag} Highlights</Text.Heading5>

      <Styled.EntryContainer>
        {filteredHighlights.map(highlight => (
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
      </Styled.EntryContainer>
    </Styled.Container>
  );
};

export default Highlights;
