import styled from "styled-components";
import { theme, breakpoints } from "config";

const baseAsideStyles = `
  position: relative;
  height: 275px;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  transition: all 0.318s;
  z-index: 999;
  top: calc(50% - 150px);
  
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

interface StyledAsideProps {
  accent: string;
}

export const LeftAside = styled.aside<StyledAsideProps>`
  ${baseAsideStyles}
  left: 20px;

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

  @media only screen and (max-width: ${breakpoints.SMALL}) {
    display: none;
  }
`;

export const RightAside = styled.aside<StyledAsideProps>`
  ${baseAsideStyles}
  right: 30px;
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
  @media only screen and (max-width: ${breakpoints.SMALL}) {
    display: none;
  }
`;

export const SocialContainer = styled.nav``;
