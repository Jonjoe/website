import * as React from 'react';
import * as Styled from './HeroButton.styles';

import {Text} from '../';

export interface HeroButtonProps {
  label: string;
  onClick: () => any;
}

const HeroButton: React.FC<HeroButtonProps> = props => {
  const {onClick, label} = props;

  return (
    <Styled.Button onClick={(): void => onClick()}>
      <Text.HeroBody>{label}</Text.HeroBody>
    </Styled.Button>
  );
};

export default HeroButton;
