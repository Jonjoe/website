import * as React from "react";
import * as Styled from "./Topbar.styles";

import { Icon, Text } from "../";

interface TopbarLinkProps {
  label: string;
}

const TopbarLink: React.FC<TopbarLinkProps> = props => (
  <Styled.Link>
    <Text.Body>{props.label}</Text.Body>
  </Styled.Link>
);

const Topbar: React.FC = () => {
  return (
    <Styled.OuterContainer>
      <Styled.InnerContainer>
        <Styled.LeftLinks>
          <TopbarLink label="Home" />
          <TopbarLink label="CV" />
          <TopbarLink label="Projects" />
        </Styled.LeftLinks>

        <Styled.CenterPiece>
          <Icon name="alien" size="2rem" />
        </Styled.CenterPiece>

        <Styled.RightLinks>
          <TopbarLink label="Labs" />
          <TopbarLink label="References" />
          <TopbarLink label="Contact" />
        </Styled.RightLinks>
      </Styled.InnerContainer>
    </Styled.OuterContainer>
  );
};

export default Topbar;
