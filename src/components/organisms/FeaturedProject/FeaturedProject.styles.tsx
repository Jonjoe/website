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

  height: 200px;
  width: 350px;
  z-index: 900;
  opacity: 0.5;
  filter: grayscale(100%);
  border: 5px solid ${theme.pallet.BLACK};
  transition: all 0.318s;
`;

export const Container = styled.article`
  margin: 5px;
`;
