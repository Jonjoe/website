import styled from "styled-components";

import { theme, constants } from "config";

interface StyledImageProps {
  image: string;
}

export const Image = styled.div<StyledImageProps>`
  ${(props: StyledImageProps) => `
    background-image: url('/images/${props.image}');
    background-size: cover;
  `}

  height: 100%;
  width: 100%;
  z-index: 800;
  opacity: 0.8;
  filter: grayscale(100%);
  transition: all 0.318s;
`;

export const Header = styled.header`
  width: 100%;
  background: ${theme.pallet.BLACK};
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 800;
  transition: all 0.5s;

  > * {
    transition: all 0.318s;
    padding: 20px 0;
  }
`;

export const Content = styled.div`
  background: ${theme.pallet.BLACK};
  padding: 25px 10px;
  position: absolute;
  bottom: -110px;
  width: 100%;
  z-index: 800;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  opacity: 0;
  transition: all 0.318s;
`;

export const Tags = styled.div`
  position: absolute;
  right: -60px;
  top: 10px;
  z-index: 800;
  transition: all 0.318s;

  > * {
    background: ${theme.pallet.WHITE};
    border: 5px solid ${theme.pallet.BLACK};
    padding: 10px;
    border-radius: 50%;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
  }
`;

export const Actions = styled.div`
  display: flex;
  position: absolute;
  left: 10px;
  top: -55px;
  z-index: 800;
  transition: all 0.318s;

  > * {
    background: ${theme.pallet.WHITE};
    border: 5px solid ${theme.pallet.BLACK};
    padding: 10px;
    border-radius: 50%;
    margin-right: 5px;
    height: 50px;
    width: 50px;
  }
`;

export const IconRow = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

export const OuterContainer = styled.article`
  width: 100%;

  &:last-child ${IconRow} {
    display: none;
  }
`;

export const Container = styled.div`
  margin: 10px;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 400px;

  @media only screen and (min-width: ${constants.breakpoints.MEDIUM}) {
    &:hover {
      ${Header} {
        top: 100%;
      }

      ${Content} {
        bottom: 0;
        opacity: 1;
      }

      ${Actions} {
        top: 10px;
      }

      ${Tags} {
        right: 10px;
      }

      ${Image} {
        opacity: 1;
        filter: grayscale(0%);
      }
    }
  }

  @media only screen and (max-width: ${constants.breakpoints.MEDIUM}) {
    margin: 0;
    height: auto;
    
    ${Header} {
      top: 0;
    }

    ${Content} {
      bottom: 0;
      opacity: 1;
      margin-bottom: 70px;
      padding-bottom: 10px;
    }

    ${Actions} {
      top: 10px;
    }

    ${Tags} {
      right: auto;
      top: auto;
      left: auto;
      bottom: auto;
      width: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      background: ${theme.pallet.BLACK};
      padding: 10px 0 10px 0;
    }

    ${Image} {
      height: 500px;
      opacity: 1;
      filter: grayscale(0%);
    }
  }
`;
