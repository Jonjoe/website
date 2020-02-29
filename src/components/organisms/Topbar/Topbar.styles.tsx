import styled from "styled-components";

export const OuterContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  overflow: hidden;
  z-index: 999;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 800;
    width: 100%;
    height: 100%;
    transition: all 1s;
    background: linear-gradient(
      180deg,
      rgba(57, 55, 58, 1) 0%,
      rgba(57, 55, 58, 1) 10%,
      rgba(255, 255, 255, 0) 60%
    );
  }

  &:hover {
    &:before {
      height: 400%;
    }
  }
`;

export const Link = styled.a`
  padding: 10px;
  color: white;
  z-index: 999;

  &:first-letter {
    font-weight: 900;
  }
`;

export const CenterPiece = styled.div`
  color: white;
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
`;

export const RightLinks = styled.div`
  ${linkBlockStyles}
  left: 80px;
`;
