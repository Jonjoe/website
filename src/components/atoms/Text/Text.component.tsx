import * as React from "react";
import * as Styled from "./Text.styles";

interface TypeProps extends DynamicTypeProps {
  children: string | JSX.Element;
}

export interface DynamicTypeProps {
  strong?: boolean;
  inverted?: boolean;
}

export const Heading1: React.FC<TypeProps> = props => {
  const { children, strong, inverted } = props;

  return (
    <Styled.Heading1 inverted={inverted} strong={strong}>
      {children}
    </Styled.Heading1>
  );
};

export const Heading2: React.FC<TypeProps> = props => {
  const { children, strong, inverted } = props;

  return (
    <Styled.Heading2 inverted={inverted} strong={strong}>
      {children}
    </Styled.Heading2>
  );
};

export const Heading3: React.FC<TypeProps> = props => {
  const { children, strong, inverted } = props;

  return (
    <Styled.Heading3 inverted={inverted} strong={strong}>
      {children}
    </Styled.Heading3>
  );
};

export const Heading4: React.FC<TypeProps> = props => {
  const { children, strong, inverted } = props;

  return (
    <Styled.Heading4 inverted={inverted} strong={strong}>
      {children}
    </Styled.Heading4>
  );
};

export const Heading5: React.FC<TypeProps> = props => {
  const { children, strong, inverted } = props;

  return (
    <Styled.Heading5 inverted={inverted} strong={strong}>
      {children}
    </Styled.Heading5>
  );
};

export const Body: React.FC<TypeProps> = props => {
  const { children, strong, inverted } = props;

  return (
    <Styled.Body inverted={inverted} strong={strong}>
      {children}
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
