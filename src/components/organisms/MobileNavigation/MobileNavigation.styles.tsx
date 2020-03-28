import styled from "styled-components";
import { breakpoints } from "app-constants";
import { theme } from "config";

export const MenuButton = styled.div``;

interface StyledPaneProps {
  isOpen: boolean;
}

export const MobileTopbar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  background: ${theme.pallet.WHITE};
  border-bottom: 5px solid ${theme.pallet.BLACK};
  z-index: 900;
  width: 100%;
  display: none;

  @media only screen and (max-width: ${breakpoints.SMALL}) {
    display: block;
  }
`;

export const Pane = styled.nav<StyledPaneProps>`
  height: 100%;
  width: 100%;
  padding: 20px;
  position: fixed;
  border-right: 5px solid ${theme.pallet.BLACK};
  top: 0;
  left: ${(props: StyledPaneProps) => (props.isOpen ? `0` : `-100%;`)};
  z-index: 999;
  background: ${theme.pallet.WHITE};
  transition: all 0.6s;
  display: none;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (max-width: ${breakpoints.SMALL}) {
    display: flex;
  }
`;

export const Header = styled.header`
  width: 100%;
`;

export const Links = styled.nav`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Link = styled.div`
  padding: 10px;
  flex: 1;
  * {
    text-decoration: none;
    font-weight: 900;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SocialLinks = styled.nav`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;

  > * {
    color: ${theme.pallet.BLACK};
    flex: 1;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    border: 5px solid ${theme.pallet.BLACK};
    border-right: none;

    &:last-child {
      border-right: 5px solid ${theme.pallet.BLACK};
    }
  }
`;

export const Email = styled.a`
  color: ${theme.pallet.BLACK};
  text-decoration: none;
  height: 60px;
  border: 5px solid ${theme.pallet.BLACK};
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    text-transform: uppercase;
    font-weight: 900;
  }
`;
