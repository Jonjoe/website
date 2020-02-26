import React from 'react';
import * as Styled from './FeaturedProject.styles';
import {Text, TechCard} from '..';

const FeaturedProject: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Text.Heading5>Rabbble</Text.Heading5>
        <Styled.ContentBody>
          <Text.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text.Body>
        </Styled.ContentBody>
        <Styled.Tags>
          <TechCard label="" icon="nodejs" />
          <TechCard label="" icon="nodejs" />
          <TechCard label="" icon="nodejs" />
        </Styled.Tags>
      </Styled.Content>
      <Styled.Image />
    </Styled.Container>
  );
};

export default FeaturedProject;
