import styled from "styled-components";

import { theme, constants } from "config";

export const OuterContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 150px 50px;
  position: relative;
  z-index: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: ${constants.breakpoints.LARGE}) {
    padding: 50px 100px;
    margin: 0;
  }

  @media only screen and (max-width: ${constants.breakpoints.MEDIUM}) {
    padding: 50px;
  }

  @media only screen and (max-width: ${constants.breakpoints.SMALL}) {
    padding: 0px;
  }
`;

interface StyledInnerContainer {
  padded?: boolean;
}

export const InnerContainer = styled.div<StyledInnerContainer>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.pallet.LIGHT_GREY};
  padding: 0px 100px;
  width: 100%;
  max-width: 1100px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 50px;

  ${(props: StyledInnerContainer) =>
    props.padded &&
    `
      padding-top: 100px;
      padding-bottom: 100px;
  `}
  
  @media only screen and (max-width: ${constants.breakpoints.LARGE}) {
    padding: 50px;
    margin: 0 0 50px 0;
  }

  @media only screen and (max-width: ${constants.breakpoints.MEDIUM}) {
    padding-bottom: 0px;
    margin: 0 0 50px 0;
  }

  @media only screen and (max-width: ${constants.breakpoints.SMALL}) {
    padding: 10px;
    padding-top: 100px;
    margin: 0 0 50px 0;
  }
`;
