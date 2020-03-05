import styled from "styled-components";
import { theme } from "config";

const baseAsideStyles = `
  background: ${theme.pallet.RED};
  position: relative;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &:before, &:after {
    height: 20px;
    width: 20px;
    content: "";
    border: 5px solid ${theme.pallet.RED};
    position: absolute;
  }
  
  
  > * {
    color: white;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 700;
  padding: 20px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  background: blue;
  display: flex;
  justify-content: space-between;
`;

export const LeftAside = styled.aside`
  ${baseAsideStyles}
  left: -100px;

  &:before {
    top: -10px;
    left: -10px;
    border-right: none;
    border-bottom: none;
  }

  &:after {
    bottom: -10px;
    left: -10px;
    border-right: none;
    border-top: none;
  }

  > * {
    padding: 20px 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const RightAside = styled.aside`
  ${baseAsideStyles}
  right: -100px;
  writing-mode: vertical-rl;

  &:before {
    top: -10px;
    right: -10px;
    border-left: none;
    border-bottom: none;
  }

  &:after {
    bottom: -10px;
    right: -10px;
    border-left: none;
    border-top: none;
  }
`;

export const Bar = styled.div``;

export const SocialContainer = styled.nav``;
