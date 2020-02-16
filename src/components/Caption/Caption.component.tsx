import * as React from 'react';

import * as Styled from './Caption.styles';

import {Text} from '../';

const Caption: React.FC = () => {
  return (
    <Styled.Caption>
      <Text.Heading3>Web / Mobile / Maker / Hacker</Text.Heading3>
      <Text.Heading2>Software Engineer</Text.Heading2>
    </Styled.Caption>
  );
};

export default Caption;
