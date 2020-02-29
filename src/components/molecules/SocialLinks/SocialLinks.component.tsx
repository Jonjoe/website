import * as React from 'react';

import * as Styled from './SocialLinks.styles';

import Icon from '../Icon/Icon.component';

const SocialLinks: React.FC = () => {
  const iconSize = '2rem';

  return (
    <Styled.Container>
      <Styled.Link>
        <Icon name="email" size={iconSize} />
      </Styled.Link>
      <Styled.Link>
        <Icon name="dribbble" size={iconSize} />
      </Styled.Link>
      <Styled.Link>
        <Icon name="twitter" size={iconSize} />
      </Styled.Link>
      <Styled.Link>
        <Icon name="github" size={iconSize} />
      </Styled.Link>
      <Styled.Link>
        <Icon name="linkedin" size={iconSize} />
      </Styled.Link>{' '}
    </Styled.Container>
  );
};

export default SocialLinks;
