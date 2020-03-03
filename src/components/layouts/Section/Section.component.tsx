import * as React from "react";
import * as Styled from "./Section.styles";

import { Text, Container } from "components";

interface SectionProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
  background?: string;
}

const Section: React.FC<SectionProps> = props => {
  const { children, title, background } = props;

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
    <Styled.Container background={background}>
      {renderHeader(title)}
      {children}
    </Styled.Container>
  );
};

export default Section;
