import * as React from 'react';
import * as Styled from './Hatch.styles';

import {HeroButton, Caption, SocialLinks} from '../';

const Hatch: React.FC = () => {
  const [hatchOpen, setHatchOpen] = React.useState(false);

  function handleHatchOpen() {
    const hatchDOM = document.getElementById('hatch');

    setHatchOpen(true);

    if (hatchDOM) {
      setTimeout(() => hatchDOM.remove(), 2000);
    }
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
