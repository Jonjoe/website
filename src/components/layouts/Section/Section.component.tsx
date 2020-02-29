import * as React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import * as Styled from "./Section.styles";

import { Text, Container } from "components";

interface SectionProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
  background?: string;
  animated?: boolean;
}

const Section: React.FC<SectionProps> = props => {
  const { children, title, background, animated } = props;

  const renderTitle = (title: string, animated?: boolean) => {
    if (animated) {
      return (
        <ScrollAnimation animateIn="fadeIn">
          <Text.SectionTitle>{title}</Text.SectionTitle>
        </ScrollAnimation>
      );
    }

    return <Text.SectionTitle>{title}</Text.SectionTitle>;
  };

  return (
    <Styled.Container background={background}>
      <Container>
        {title && renderTitle(title, animated)}
        <div>{children}</div>
      </Container>
    </Styled.Container>
  );
};

export default Section;
