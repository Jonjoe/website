import styled from "styled-components";

import { theme, constants } from "config";

export const OuterContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 25px 50px 25px;
  overflow: hidden;
  z-index: 999;

  @media only screen and (max-width: ${constants.breakpoints.MEDIUM}) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100px;
    width: 100%;
    background: ${theme.pallet.WHITE};
    border-bottom: 5px solid ${theme.pallet.BLACK};
    padding-bottom: 25px;
  }

  @media only screen and (max-width: ${constants.breakpoints.SMALL}) {
    display: none;  }
`;

export const Link = styled.div`
  padding: 10px;
  color: white;
  z-index: 999;

  > a {
    text-decoration: none;

    &:first-letter {
      font-weight: 900;
    }
  }
`;

export const CenterPiece = styled.div`
  position: relative;
  z-index: 999;
  padding: 0 30px;
`;

export const InnerContainer = styled.div`
  display: flex;
  position: relative;
`;

const linkBlockStyles = `
  display: flex;
  position: absolute;
  top: 0;
  height: 100%;
`;

export const LeftLinks = styled.div`
  ${linkBlockStyles}
  right: 80px;

  @media only screen and (max-width: ${constants.breakpoints.MEDIUM}) {
    position: relative;
    right: 0;
  }
`;

export const RightLinks = styled.div`
  ${linkBlockStyles}
  left: 80px;

  @media only screen and (max-width: ${constants.breakpoints.MEDIUM}) {
    position: relative;
    left: 0;
  }
`;
