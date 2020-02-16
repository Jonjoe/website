import * as React from 'react';

import * as Styled from './Section.styles';

import {Text, Container} from '../';

interface SectionProps {
  children: JSX.Element;
  title: string;
  background?: string;
}

const Section: React.FC<SectionProps> = props => {
  const {children, title, background} = props;

  return (
    <Styled.Container background={background}>
      <Container>
        <Styled.Title>
          <Styled.TitleContent background={background}>
            <Text.SectionTitle>{title}</Text.SectionTitle>
          </Styled.TitleContent>
        </Styled.Title>

        <section>{children}</section>
      </Container>
    </Styled.Container>
  );
};

export default Section;
