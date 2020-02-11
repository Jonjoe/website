import * as React from 'react';
import * as Styled from './Hatch.styles';

import { HeroButton } from '../';

const Hatch: React.FC = () => {
  const [hatchOpen, setHatchOpen] = React.useState(false);

  return (
    <Styled.Container>
      <Styled.Panel position="top" open={hatchOpen} />

      <Styled.ButtonWrapper hidden={hatchOpen}>
        <HeroButton onClick={(): void => setHatchOpen(true)} label="Dive In" />
      </Styled.ButtonWrapper>

      <Styled.Panel position="bottom" open={hatchOpen} />
    </Styled.Container>
  );
};

export default Hatch;
