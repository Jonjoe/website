import * as React from "react";
import * as Styled from "./MobileNavigation.styles";
import { Link as RouterLink } from "react-router-dom";

import { social } from "app-constants";
import { ROUTES } from "config/routes";

import { Icon, Text, SocialLinks } from "components";

interface LinkProps {
  to: string;
  label: string;
}

const Link: React.FC<LinkProps> = props => {
  const { label, to } = props;

  return (
    <Styled.Link>
      <RouterLink to={to}>
        <Text.Heading5 align="center">{label}</Text.Heading5>
      </RouterLink>
    </Styled.Link>
  );
};

const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Styled.MobileTopbar>
        <Styled.MenuButton onClick={() => setIsOpen(true)}>
          <Icon name="bars" size="1.6rem" />
        </Styled.MenuButton>
      </Styled.MobileTopbar>

      <Styled.Pane isOpen={isOpen}>
        <Styled.Header>
          <Styled.MenuButton onClick={() => setIsOpen(false)}>
            <Icon name="cross" size="2rem" />
          </Styled.MenuButton>
        </Styled.Header>

        <Styled.Links>
          <Link to={ROUTES.HOME} label="Home" />
          <Link to={ROUTES.PROJECTS} label="Projects" />
          <Link to={ROUTES.LABS} label="Labs" />
          <Link to={ROUTES.WORK_HISTORY} label="Work History" />
          <Link to={ROUTES.CV} label="CV" />
        </Styled.Links>

        <Styled.Footer>
          <Styled.SocialLinks>
            <SocialLinks />
          </Styled.SocialLinks>

          <Styled.Email href={`mailto:${social.EMAIL}`}>
            <Text.Body align="center">{social.EMAIL}</Text.Body>
          </Styled.Email>
        </Styled.Footer>
      </Styled.Pane>
    </React.Fragment>
  );
};

export default MobileNavigation;
