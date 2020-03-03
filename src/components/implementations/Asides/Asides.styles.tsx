import styled from "styled-components";
import { theme } from "config";

const baseAsideStyles = `
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftAside = styled.aside`
  ${baseAsideStyles}
  left: 25px;
`;

export const RightAside = styled.aside`
  ${baseAsideStyles}
  right: 25px;
`;

export const Bar = styled.div`
  width: 2px;
  height: 100px;
  background: ${theme.pallet.LIGHT_GREY};
`;

export const SocialContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  > * {
    margin: 10px;
    color: ${theme.pallet.LIGHT_GREY};
  }
`;
