import * as React from 'react';

import * as Styled from './Container.styles';

interface ContainerProps {
  children: any;
}

const Container: React.FC<ContainerProps> = props => {
  const {children} = props;

  return (
    <Styled.OuterContainer>
      <Styled.InnerContainer>{children}</Styled.InnerContainer>
    </Styled.OuterContainer>
  );
};

export default Container;
