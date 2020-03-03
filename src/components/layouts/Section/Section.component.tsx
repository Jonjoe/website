import * as React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import * as Styled from "./Section.styles";

import { Text, Container } from "components";

interface SectionProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
  background?: string;
}

const Section: React.FC<SectionProps> = props => {
  const { children, title, background } = props;

  return (
    <Styled.Container background={background}>
      <Container>
        {title && <Text.Heading2>{title}</Text.Heading2>}
        <div>{children}</div>
      </Container>
    </Styled.Container>
  );
};

export default Section;
