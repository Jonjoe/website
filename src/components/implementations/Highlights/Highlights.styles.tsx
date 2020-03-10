import styled from "styled-components";
import { theme } from "config";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Entry = styled.article`
  width: 100%;
  position: relative;
  margin-top: 50px;
  margin-bottom: 50px;
  background: rgba(45, 45, 45, 0.2);

  &:after {
    height: 100px;
    width: 5px;
    background: white;
    content: "";
    position: absolute;
    bottom: -100px;
    left: 47.5px;
  }

  &:last-child {
    margin-bottom: 0;
    &:after {
      display: none;
    }
  }
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
`;

export const Icon = styled.div`
  background: white;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -25px;
  left: 25px;
`;

export const Content = styled.section`
  margin-bottom: 20px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
`;
export const Tag = styled.div`
  padding: 10px;
  background: rgba(255, 255, 255, 0.5);
  margin-right: 10px;
  margin-top: 10px;
  > * {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
  }
`;
