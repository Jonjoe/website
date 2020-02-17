import * as React from 'react';
import * as Styled from './Page.styles';

interface PageProps {
  locked: boolean;
  children: JSX.Element[] | JSX.Element;
}

const Page: React.FC<PageProps> = props => {
  const {children, locked} = props;

  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  )
};

export default Page;
