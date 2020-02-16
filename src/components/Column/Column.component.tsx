import * as React from 'react';
import * as Styled from "./Column.styles"

interface ColumnProps {
  children: JSX.Element | JSX.Element[];
}

const Column: React.FC<ColumnProps> = props => {
  const {children} = props;

  return <Styled.Column>{children}</Styled.Column>;
};

export default Column;
