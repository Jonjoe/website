import * as React from 'react';
import * as Styled from './Hatch.styles';

import {HeroButton, Caption, SocialLinks} from '../';

interface HatchProps {
  onOpen: any;
}

const Hatch: React.FC<HatchProps> = props => {
  const { onOpen } = props
  const [hatchOpen, setHatchOpen] = React.useState(false);

  function handleHatchOpen() {
    setHatchOpen(true);
    onOpen()
  }

  return (
    <Styled.Container id="hatch">
      <Styled.Panel position="top" open={hatchOpen}>
        <Caption title="Jonjoe Whitfield" subtitle="Software Engineer" />
      </Styled.Panel>

      <Styled.ButtonWrapper hidden={hatchOpen}>
        <HeroButton onClick={(): void => handleHatchOpen()} label="Dive In" />
      </Styled.ButtonWrapper>

      <Styled.Panel position="bottom" open={hatchOpen}>
        <SocialLinks />
      </Styled.Panel>
    </Styled.Container>
  );
};

export default Hatch;
