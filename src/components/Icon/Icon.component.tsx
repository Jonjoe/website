import * as React from 'react';

import {library, IconProp} from '@fortawesome/fontawesome-svg-core';
import {fad} from '@fortawesome/pro-duotone-svg-icons';
import {fal} from '@fortawesome/pro-light-svg-icons';
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import * as Styled from './Icon.styles'

library.add(fal, fab, fad, fas, far);

export type IconName =
  | 'question-circle'
  | 'dribbble'
  | 'twitter'
  | 'github'
  | 'linkedin'
  | 'email';

export interface IconProps {
  name: IconName;
  size?: string;
  iconColor?: string;
}

function mapNamePropToFaNames(iconName: IconName): string | string[] {
  switch (iconName) {
    case 'question-circle':
      return ['fal', 'question-circle'];

    case 'dribbble':
      return ['fab', 'dribbble'];

    case 'twitter':
      return ['fab', 'twitter'];

    case 'github':
      return ['fab', 'github'];

    case 'linkedin':
      return ['fab', 'linkedin-in'];

    case 'email':
      return ['fal', 'envelope-open-text'];

    default:
      return iconName;
  }
}

const Icon: React.FC<IconProps> = (props: IconProps): JSX.Element => {
  const {name, size, iconColor} = props;

  const iconName = mapNamePropToFaNames(name);

  return (
    <Styled.Icon size={size}>
      <FontAwesomeIcon
        color={iconColor}
        size={'lg'}
        icon={iconName as IconProp}
      />
    </Styled.Icon>
  );
};

export default Icon;
