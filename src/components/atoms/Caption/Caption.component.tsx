import * as React from 'react';

import * as Styled from './Caption.styles';

import {Text} from 'components';

interface CaptionProps {
  title: string;
  subtitle: string;
}

const Caption: React.FC<CaptionProps> = props => {
  const {title, subtitle } = props

  return (
    <Styled.Caption>
      <Text.Heading3>{subtitle}</Text.Heading3>
      
      <Text.Heading2>{title}</Text.Heading2>
    </Styled.Caption>
  );
};

export default Caption;
