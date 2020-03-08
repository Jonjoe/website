import * as React from "react";
import * as Styled from "./Section.styles";

import { Text, Struct } from "components";

interface SectionProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
  accent?: string;
}

const Section: React.FC<SectionProps> = props => {
  const { children, title, accent } = props;

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

  return (
    <Styled.Container accent={accent}>
      {renderHeader(title)}
      <Struct column centered>
        {children}
      </Struct>
    </Styled.Container>
  );
};

export default Section;
