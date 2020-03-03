import styled from "styled-components";

export const OuterContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 25px 50px 25px;
  overflow: hidden;
  z-index: 999;
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
