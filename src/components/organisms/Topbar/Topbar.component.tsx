import * as React from "react";
import * as Styled from "./Topbar.styles";

import { Link } from "react-router-dom";

import { Icon, Text } from "components";

import { ROUTES } from 'routes'

interface TopbarLinkProps {
  label: string;
  to: string;
}

const TopbarLink: React.FC<TopbarLinkProps> = props => (
  <Styled.Link>
    <Link to={props.to}>
      <Text.Body>{props.label}</Text.Body>
    </Link>
  </Styled.Link>
);

const Topbar: React.FC = () => {
  return (
    <Styled.OuterContainer>
      <Styled.InnerContainer>
        <Styled.LeftLinks>
          <TopbarLink to={ROUTES.HOME}label="Home" />
          <TopbarLink to={ROUTES.HOME} label="CV" />
          <TopbarLink to={ROUTES.PROJECTS}label="Projects" />
        </Styled.LeftLinks>

        <Styled.CenterPiece>
          <Icon name="alien" size="2rem" />
        </Styled.CenterPiece>

        <Styled.RightLinks>
          <TopbarLink to={ROUTES.LABS} label="Labs" />
          <TopbarLink to={ROUTES.WORK_HISTORY} label="History" />
          <TopbarLink to={ROUTES.HOME} label="Contact" />
        </Styled.RightLinks>
      </Styled.InnerContainer>
    </Styled.OuterContainer>
  );
};

export default Topbar;
