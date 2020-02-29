import * as React from 'react';

import {library, IconProp} from '@fortawesome/fontawesome-svg-core';
import {fad} from '@fortawesome/pro-duotone-svg-icons';
import {fal} from '@fortawesome/pro-light-svg-icons';
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import * as Styled from './Icon.styles';

library.add(fal, fab, fad, fas, far);

export type IconName =
  | 'question-circle'
  | 'dribbble'
  | 'twitter'
  | 'github'
  | 'code'
  | 'alien'
  | 'hexagon'
  | 'code2'
  | 'rocket'
  | 'bullseye'
  | 'bulletpoint'
  | 'glasses'
  | 'linkedin'
  | 'react'
  | 'javascript'
  | 'nodejs'
  | 'aws'
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

    case 'glasses':
      return ['fad', 'glasses'];
    
    case 'hexagon':
      return ['fal', 'hexagon'];
    
    case 'alien':
      return ['fad', 'alien'];

    case 'bullseye':
      return ['fad', 'bullseye-arrow'];
    
    case 'bulletpoint':
      return ['fad', 'chevron-double-right'];

    case 'code':
      return ['fad', 'code'];

    case 'code2':
      return ['fad', 'brackets'];

    case 'aws':
      return ['fab', 'aws'];

    case 'javascript':
      return ['fab', 'js'];

    case 'nodejs':
      return ['fab', 'node'];

    case 'react':
      return ['fab', 'react'];

    case 'github':
      return ['fab', 'github'];

    case 'rocket':
      return ['fad', 'rocket-launch'];

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
