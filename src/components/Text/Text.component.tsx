import * as React from 'react';
import * as Styled from './Text.styles';

interface TypeProps {
  children: string | JSX.Element;
}

export const Heading1: React.FC<TypeProps> = props => {
  const {children} = props;

  return <Styled.Heading1>{children}</Styled.Heading1>;
};

export const Heading2: React.FC<TypeProps> = props => {
  const {children} = props;

  return <Styled.Heading2>{children}</Styled.Heading2>;
};

export const Heading3: React.FC<TypeProps> = props => {
  const {children} = props;

  return <Styled.Heading3>{children}</Styled.Heading3>;
};

export const Heading4: React.FC<TypeProps> = props => {
  const {children} = props;

  return <Styled.Heading4>{children}</Styled.Heading4>;
};

export const SectionTitle: React.FC<TypeProps> = props => {
  const {children} = props;

  return <Styled.SectionTitle>{children}</Styled.SectionTitle>;
};

export const HeroBody: React.FC<TypeProps> = props => {
  const {children} = props;

  return <Styled.HeroBody>{children}</Styled.HeroBody>;
};

export const Body: React.FC<TypeProps> = props => {
  const {children} = props;

  return <Styled.Body>{children}</Styled.Body>;
};

export default {Heading1, Heading2, Heading3, Heading4, SectionTitle, HeroBody, Body};
