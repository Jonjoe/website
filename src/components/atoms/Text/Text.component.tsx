import * as React from "react";
import * as Styled from "./Text.styles";

interface TypeProps extends DynamicTypeProps {
  children: any;
}

export interface DynamicTypeProps {
  strong?: boolean;
  inverted?: boolean;
  align?: "left" | "right" | "center";
}

export const Heading1: React.FC<TypeProps> = props => {
  return <Styled.Heading1 {...props}>{props.children}</Styled.Heading1>;
};

export const Heading2: React.FC<TypeProps> = props => {
  return <Styled.Heading2 {...props}>{props.children}</Styled.Heading2>;
};

export const Heading3: React.FC<TypeProps> = props => {
  return <Styled.Heading3 {...props}>{props.children}</Styled.Heading3>;
};

export const Heading4: React.FC<TypeProps> = props => {
  return <Styled.Heading4 {...props}>{props.children}</Styled.Heading4>;
};

export const Heading5: React.FC<TypeProps> = props => {
  return <Styled.Heading5 {...props}>{props.children}</Styled.Heading5>;
};

export const Heading6: React.FC<TypeProps> = props => {
  return <Styled.Heading6 {...props}>{props.children}</Styled.Heading6>;
};

export const Body: React.FC<TypeProps> = props => {
  return <Styled.Body {...props}>{props.children}</Styled.Body>;
};

export default {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Body
};
