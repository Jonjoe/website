import styled from "styled-components";
import { theme, breakpoints } from "config";

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
  z-index: 900;
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
  z-index: 999;
  transition: all 0.318s;

  > * {
    transition: all 0.318s;
    padding: 20px 0;
  }
`;

export const Content = styled.div`
  background: ${theme.pallet.BLACK};
  padding: 10px;
  position: absolute;
  bottom: -110px;
  width: 100%;
  z-index: 999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  transition: all 0.318s;
`;

export const Tags = styled.div`
  position: absolute;
  right: -60px;
  top: 10px;
  z-index: 999;
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
  z-index: 999;
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

export const Container = styled.article`
  margin: 10px;
  margin-bottom: 0;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 400px;

  @media only screen and (min-width: ${breakpoints.SMALL}) {
    &:hover {
      ${Header} {
        top: calc(100% - 140px);
      }

      ${Content} {
        bottom: 0;
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

  @media only screen and (max-width: ${breakpoints.SMALL}) {
    height: 450px;

    ${Header} {
      top: 0;
      padding-bottom: 10px;
      > * {
      }
    }
    ${Content} {
      padding-top: 20px;
      bottom: 0;
    }

    ${Actions}, ${Tags} {
      top: 90px;
    }

    ${Tags} {
      right: 10px;
    }

    ${Image} {
      opacity: 0.9;
      filter: grayscale(90%);
    }
  }
`;
