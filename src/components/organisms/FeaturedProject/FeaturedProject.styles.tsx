import styled from "styled-components";
import { theme } from 'config'

interface StyledImageProps {
  image: string;
}

export const Image = styled.div<StyledImageProps>`
  height: 300px;
  width: 500px;
  background: #eee;
  position: absolute;
  z-index: 800;
  filter: grayscale(100%);
  opacity: 0.5;
  transition: all 0.318s;
  border: 5px solid ${theme.pallet.BLACK};

  ${(props: StyledImageProps) => `
    background-image: url('/images/${props.image}');
    background-repeat: no-repeat;
    background-size: cover;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const ContentBody = styled.div`
  background: #39373a;
  padding: 15px;
  width: 100%;
  z-index: 900;
  margin-top: 20px;
`;

export const Tags = styled.div`
  display: flex;
  justify-content: flex-start;
  
  > * {
    padding: 10px;  
  }
`;

export const Container = styled.article`
  position: relative;
  display: flex;
  min-height: 300px;
  width: 100%;
  margin-bottom: 50px;

  &:hover {
    ${Image} {
      filter: grayscale(0);
      opacity: 1;
    }
  }

  &:nth-child(even) {
    justify-content: flex-end;

    ${Image} {
      left: 0;
    }

    ${Content} {
    }

    ${ContentBody} {
      > * {
        text-align: right;
      }
    }

    h5 {
      text-align: right;
    }
  }

  &:nth-child(odd) {
    ${Image} {
      right: 0;
    }

    ${Content} {
    }
  }
`;
