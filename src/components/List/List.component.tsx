import * as React from 'react';
import * as Styled from './List.styles';

import {Text, Icon} from '../';

interface ListProps {
  data: any[];
}

const List: React.FC<ListProps> = props => {
  const {data} = props;

  return (
    <Styled.List>
      {data.map((item: any, index: number) => (
        <Styled.ListItem key={index}>
          <Styled.IconWrapper>
            <Icon name="bulletpoint" size="0.8rem" />
          </Styled.IconWrapper>

          <Text.Body>{item}</Text.Body>
        </Styled.ListItem>
      ))}
    </Styled.List>
  );
};

export default List;
