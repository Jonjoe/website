import * as React from "react";
import * as Styled from "./Section.styles";

import { Text, Struct, Divider } from "components";

interface SectionProps {
  children?: React.ReactNode;
  subtitle?: string;
  title?: string;
  accent?: string;
}

function Section(props: SectionProps) {
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
    if (!subtitle) {
      return null;
    }

    return (
      <Styled.Subheader>
        <Text.Heading5 inverted>{subtitle}</Text.Heading5>
        <Divider left />
      </Styled.Subheader>
    );
  }

  return (
    <Styled.Container accent={accent}>
      {renderHeader(title)}

      <Struct column>
        {renderSubheader(subtitle)}
        {children && children}
      </Struct>
    </Styled.Container>
  );
}

export default Section as React.FC<SectionProps>;
