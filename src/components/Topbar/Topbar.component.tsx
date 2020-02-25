import * as React from 'react';
import * as Styled from './Topbar.styles';

import {Icon, Text} from '../';

interface TopbarLinkProps {
  label: string;
}

const TopbarLink: React.FC<TopbarLinkProps> = props => (
  <Styled.Link>
    <Text.Body strong>{props.label}</Text.Body>
  </Styled.Link>
);

const Topbar: React.FC = () => {
  return (
    <Styled.Header>
      <TopbarLink label="Home" />
      <TopbarLink label="CV" />
      <TopbarLink label="Labs" />
      <TopbarLink label="Contact Me" />
    </Styled.Header>
  );
};

export default Topbar;
