import styled from "styled-components";
import { theme } from "config";

const baseAsideStyles = `
  position: relative;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.318s;

  &:before, &:after {
    height: 20px;
    width: 20px;
    content: "";
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

interface StyledAsideProps {
  accent: string;
}

export const LeftAside = styled.aside<StyledAsideProps>`
  ${baseAsideStyles}
  left: -100px;

  ${props => `
    background: ${props.accent};
    border: 5px solid ${props.accent};
  `}

  &:before, &:after {
    ${props => `
      border: 5px solid ${props.accent};
    `}
  }

  &:before {
    top: -15px;
    left: -15px;
    border-right: none;
    border-bottom: none;
  }

  &:after {
    bottom: -15px;
    left: -15px;
    border-right: none;
    border-top: none;
  }

  > * {
    padding: 20px 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.318s;
    &:hover {
      background: white;
      ${props => `
        color: ${props.accent};
      `}
    }
  }
`;

export const RightAside = styled.aside<StyledAsideProps>`
  ${baseAsideStyles}
  right: -100px;
  writing-mode: vertical-rl;

  ${props => `
    background: ${props.accent};
    border: 5px solid ${props.accent};
  `}

  &:before, &:after {
    ${props => `
      border: 5px solid ${props.accent};
    `}
  }

  &:before {
    top: -15px;
    right: -15px;
    border-left: none;
    border-bottom: none;
  }

  &:after {
    bottom: -15px;
    right: -15px;
    border-left: none;
    border-top: none;
  }

  > * {
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  &:hover {
    background: white;
    cursor: pointer;

    > * {
      ${props => `
        color: ${props.accent};
      `}
    }
  }
`;

export const Bar = styled.div``;

export const SocialContainer = styled.nav``;
