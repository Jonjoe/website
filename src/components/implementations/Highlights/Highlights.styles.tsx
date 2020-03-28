import styled from "styled-components";

import { breakpoints } from "app-constants";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const EntryContainer = styled.div``;

export const Entry = styled.article`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  background: rgba(45, 45, 45, 0.2);
`;

interface InnerContainerProps {
  logoUrl: string;
}

export const InnerContainer = styled.div<InnerContainerProps>`
  position: relative;
  overflow: hidden;
  padding: 30px 20px 20px 20px;

  &:before {
    content: "";
    background-image: ${(props: InnerContainerProps) =>
      `url("/images/${props.logoUrl}")`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 300px;
    width: 300px;
    display: block;
    position: absolute;
    right: -50px;
    top: -50px;
    opacity: 0.1;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    font-weight: 900;
    text-transform: uppercase;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  > p {
    font-weight: 900;
  }

  @media only screen and (max-width: ${breakpoints.SMALL}) {
    align-items: flex-start;

    > p {
      text-align: right;
    }
  }
`;

export const Content = styled.section`
  margin-bottom: 20px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
`;
