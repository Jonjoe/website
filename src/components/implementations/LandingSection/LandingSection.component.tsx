import * as React from 'react';
import * as Styled from './LandingSection.styles';

interface LandingSectionProps {
  children: JSX.Element | JSX.Element[];
}

const LandingSection: React.FC<LandingSectionProps> = props => {
  const {children} = props;

  return (
    <Styled.Container>
      <Styled.Background />
      <Styled.Content>{children}</Styled.Content>
    </Styled.Container>
  );
};

export default LandingSection;
