import * as React from 'react';
import * as Styled from './TechCard.styles';
import {Icon, Text} from '..';
import {IconName} from '../Icon/Icon.component';

interface TechCardProps {
  label: string;
  icon: IconName;
}

const TechCard: React.FC<TechCardProps> = props => {
  const {label, icon} = props;

  return (
    <Styled.Container>
      <Icon name={icon} size="2rem" />
      <Text.Body>
        <strong>{label}</strong>
      </Text.Body>
    </Styled.Container>
  );
};

export default TechCard;
