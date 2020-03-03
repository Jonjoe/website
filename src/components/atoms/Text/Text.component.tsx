import * as React from "react";
import * as Styled from "./Text.styles";

interface TypeProps extends DynamicTypeProps {
  children: string | JSX.Element;
}

export interface DynamicTypeProps {
  strong?: boolean;
  inverted?: boolean;
  centered?: boolean;
}

export const Heading1: React.FC<TypeProps> = props => {
  return (
    <Styled.Heading1 {...props}>
      {props.children}
    </Styled.Heading1>
  );
};

export const Heading2: React.FC<TypeProps> = props => {
  return (
    <Styled.Heading2 {...props}>
      {props.children}
    </Styled.Heading2>
  );
};

export const Heading3: React.FC<TypeProps> = props => {
  return (
    <Styled.Heading3 {...props}>
      {props.children}
    </Styled.Heading3>
  );
};

export const Heading4: React.FC<TypeProps> = props => {
  return (
    <Styled.Heading4 {...props}>
      {props.children}
    </Styled.Heading4>
  );
};

export const Heading5: React.FC<TypeProps> = props => {
  return (
    <Styled.Heading5 {...props}>
      {props.children}
    </Styled.Heading5>
  );
};

export const Body: React.FC<TypeProps> = props => {
  return (
    <Styled.Body {...props}>
      {props.children}
    </Styled.Body>
  );
};

export default {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Body
};
