import * as React from 'react';
import * as Styled from './Topbar.styles';

import {Icon, Text} from '../';

interface TopbarLinkProps {
  label: string;
}

const TopbarLink: React.FC<TopbarLinkProps> = props => (
  <Styled.Link>
    <Text.Body>{props.label}</Text.Body>
  </Styled.Link>
);

const Topbar: React.FC = () => {
  return (
    <Styled.Header>
      <TopbarLink label="Home" />
      <TopbarLink label="CV" />
      
      <Styled.CenterPiece>
        <Icon name="alien" size="2rem" />
      </Styled.CenterPiece>
      
      <TopbarLink label="Labs" />
      <TopbarLink label="Contact" />
    </Styled.Header>
  );
};

export default Topbar;
