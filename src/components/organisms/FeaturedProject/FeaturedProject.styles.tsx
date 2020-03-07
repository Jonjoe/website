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

  height: 250px;
  width: 400px;
  z-index: 900;
  position: absolute;
  top: 0;
  opacity: 0.5;
  filter: grayscale(100%);
  border: 5px solid ${theme.pallet.BLACK};
  transition: all 0.318s;
`;

export const Header = styled.header`
  margin-bottom: 10px;
`;

export const Content = styled.section`
  background: ${theme.pallet.BLACK};
  position: absolute;
  z-index: 999;
  width: 500px;
  top: 20px;
  padding: 20px;

  > p {
    color: white;
  }
`;

export const Tags = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: -33px;
  left: 0px;
`;

export const Tag = styled.li`
  padding: 5px 10px;
  margin-right: 1px;
  background: white;
  border: 5px solid ${theme.pallet.BLACK};
  border-top: none;
`;

export const Container = styled.article`
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  min-height: 250px;

  &:nth-child(odd) {
    ${Image} {
      right: 0;
    }

    ${Content} {
      left: 0;
    }
  }

  &:nth-child(even) {
    ${Image} {
      left: 0;
    }

    ${Content} {
      right: 0;
    }
  }

  &:hover {
    ${Image} {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
`;
