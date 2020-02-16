import * as React from 'react';

import * as Styled from './SocialLinks.styles'

import Icon from '../Icon/Icon.component';

const SocialLinks: React.FC = () => {
  return (
    <Styled.Container>
      <Icon name="question-circle" />
      <Icon name="question-circle" />
      <Icon name="question-circle" />
      <Icon name="question-circle" />
      <Icon name="question-circle" />
    </Styled.Container>
  );
};

export default SocialLinks;
