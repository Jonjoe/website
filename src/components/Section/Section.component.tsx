import * as React from 'react';

import * as Styled from './Section.styles';

import {Text} from '../';

interface SectionProps {
  children: JSX.Element;
  title: string;
}

const Section: React.FC<SectionProps> = props => {
  const {children, title} = props;

  return (
    <Styled.Container>
      <Styled.Title>
        <Styled.TitleContent>
          <Text.SectionTitle>{title}</Text.SectionTitle>
        </Styled.TitleContent>
      </Styled.Title>

      <section>{children}</section>
    </Styled.Container>
  );
};

export default Section;
