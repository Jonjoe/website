import * as React from 'react';
import * as Styled from './Struct.styles';

interface StructProps {
  children?: any;
  column?: boolean;
  size?: number;
  fixedWidth?: number;
  fixedHeight?: number;
  padded?: boolean;
  hPadded?: boolean;
  vPadded?: boolean;
}

const Struct: React.FC<StructProps> = (props): JSX.Element => {
  const {
    children,
    column,
    size,
    padded,
    hPadded,
    vPadded,
    fixedHeight,
    fixedWidth,
  } = props;

  return (
    <Styled.StructWrapper
      fixedHeight={fixedHeight}
      fixedWidth={fixedWidth}
      padded={padded}
      hPadded={hPadded}
      vPadded={vPadded}
      size={size}
      column={column}>
      {children}
    </Styled.StructWrapper>
  );
};

export default Struct;
