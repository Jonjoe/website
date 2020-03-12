import * as React from "react";
import * as Styled from "./Topbar.styles";

import { Link } from "react-router-dom";

import { Icon, Text } from "components";

import { constants } from 'config'
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
          <TopbarLink to={ROUTES.PROJECTS}label="Projects" />
          <TopbarLink to={ROUTES.LABS} label="Labs" />
        </Styled.LeftLinks>

        <Styled.CenterPiece>
          <Icon name="d10" size="2rem" />
        </Styled.CenterPiece>

        <Styled.RightLinks>
          <TopbarLink to={ROUTES.CV} label="CV" />
          <TopbarLink to={ROUTES.WORK_HISTORY} label="History" />
          <Styled.Link>
            <a target="blank" href={constants.links.LINKEDIN}><Text.Body>Contact</Text.Body></a>
          </Styled.Link>
        </Styled.RightLinks>
      </Styled.InnerContainer>
    </Styled.OuterContainer>
  );
};

export default Topbar;
