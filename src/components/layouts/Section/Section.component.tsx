import * as React from "react";
import * as Styled from "./Section.styles";

import { Text, Struct, Divider } from "components";

interface SectionProps {
  children: JSX.Element | JSX.Element[];
  subtitle?: string;
  title?: string;
  accent?: string;
}

const Section: React.FC<SectionProps> = props => {
  const { children, title, subtitle, accent } = props;

  function renderHeader(title?: string) {
    if (!title) {
      return null;
    }

    return (
      <Styled.Header>
        <Text.Heading2>{title}</Text.Heading2>
      </Styled.Header>
    );
  }

  function renderSubheader(subtitle?: string) {
    if(!subtitle) {
      return null
    }

    return (
      <Styled.Subheader>
        <Text.Heading5 inverted>{subtitle}</Text.Heading5>
        <Divider />
      </Styled.Subheader>
    )
  }

  return (
    <Styled.Container accent={accent}>
      {renderHeader(title)}

      <Struct column centered>
        {renderSubheader(subtitle)}
        {children}
      </Struct>
    </Styled.Container>
  );
};

export default Section;
