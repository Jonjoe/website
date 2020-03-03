import * as React from 'react';
import * as Styled from './SkillPoints.styles'

import { Icon, Text } from 'components'
import {IconName} from 'components/atoms/Icon/Icon.component';

interface PointProps {
  label: string;
  icon: IconName;
}

const Point: React.FC<PointProps> = props => {
  const { label, icon } = props

  return (
    <Styled.Point>
      <Icon size="50px" name={icon} />
      <Text.Heading6>{label}</Text.Heading6>
    </Styled.Point>
  );
};

const SkillPoints: React.FC = () => {
  return (
    <Styled.Container>
      <Point icon="bullseye" label="Product Focused" />
      <Point icon="glasses" label="Dedicated" />
      <Point icon="code" label="Pixel Perfect Code" />
      <Point icon="rocket" label="Passionate" />
    </Styled.Container>
  );
};

export default SkillPoints;
