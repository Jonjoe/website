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
  width: 100%;;
  z-index: 900;
  opacity: 0.5;
  filter: grayscale(100%);
  border: 5px solid ${theme.pallet.BLACK};
  transition: all 0.318s;
`;

export const Container = styled.article`
  margin: 10px;
  margin-bottom: 5px;
  height: 250px;
  width: 350px;

  &:nth-child(1) {
    width: 700px;
    height: 400px;
    margin: 5px;
  }
`;
