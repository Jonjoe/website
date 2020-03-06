import styled from "styled-components";
import { breakpoints } from "config"

interface ContainerProps {
  background?: string;
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  width: 100%;
  max-width: 1000px;
  position: relative;
  margin: 100px 0;
  padding: 50px;

  ${(props: ContainerProps) =>
    props.background
      ? `background-color: ${props.background};`
      : `background-color: transparant;`}

  &:before, &:after {
    ${(props: ContainerProps) =>
      props.background && `border: 5px solid ${props.background};`}

    position: absolute;
    display: block;
    content: "";
    height: 50px;
    width: 50px;
  }

  &:before {
    border-bottom-width: 0px;
    border-left-width: 0px;
    top: -10px;
    right: -10px;
  }

  &:after {
    border-top-width: 0px;
    border-right-width: 0px;
    bottom: -10px;
    left: -10px;
  }

  @media only screen and (max-width: ${breakpoints.LARGE}) {
    padding: 50px 30px;
    margin: 70px 0;
  }
  @media only screen and (max-width: ${breakpoints.SMALL}) {
    padding: 50px 15px;
    margin: 40px 0;
  }
`;

export const Header = styled.header`
  position: absolute;
  top: -80px;

  @media only screen and (max-width: ${breakpoints.MEDIUM}) {
    left: 0;
    top: -50px;
  }
`;
