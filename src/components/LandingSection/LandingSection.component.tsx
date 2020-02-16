import * as React from 'react';
import * as Styled from './LandingSection.styles';

interface LandingSectionProps {
  children: JSX.Element | JSX.Element[];
}

const LandingSection: React.FC<LandingSectionProps> = props => {
  const { children } = props;

  return <Styled.Section>{children}</Styled.Section>;
};

export default LandingSection;
