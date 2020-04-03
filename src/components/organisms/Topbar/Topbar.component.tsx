import * as React from "react";
import * as Styled from "./Topbar.styles";

import { Link } from "react-router-dom";

import { Icon, Text } from "components";

import { constants } from "config";

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
          <TopbarLink to={constants.routes.HOME} label="Home" />
          <TopbarLink to={constants.routes.PROJECTS} label="Projects" />
          <TopbarLink to={constants.routes.LABS} label="Labs" />
        </Styled.LeftLinks>

        <Styled.CenterPiece>
          <Icon name="d10" size="2rem" />
        </Styled.CenterPiece>

        <Styled.RightLinks>
          <TopbarLink to={constants.routes.CV} label="CV" />
          <TopbarLink to={constants.routes.WORK_HISTORY} label="History" />
          <Styled.Link>
            <a target="blank" href={constants.socialLinks.LINKEDIN}>
              <Text.Body>Contact</Text.Body>
            </a>
          </Styled.Link>
        </Styled.RightLinks>
      </Styled.InnerContainer>
    </Styled.OuterContainer>
  );
};

export default Topbar;
