import styled from "styled-components";
import { constants } from "config"

interface ContainerProps {
  accent?: string;
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  width: 100%;
  max-width: 1000px;
  position: relative;
  margin: 100px 0;
  padding: 50px;

  ${(props: ContainerProps) =>
    props.accent
      ? `background-color: ${props.accent};`
      : `background-color: transparant;`}

  &:before, &:after {
    ${(props: ContainerProps) =>
      props.accent && `border: 5px solid ${props.accent};`}

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

  @media only screen and (max-width: ${constants.breakpoints.LARGE}) {
    padding: 50px 30px;
    margin: 70px 0;
  }

  @media only screen and (max-width: ${constants.breakpoints.SMALL}) {
    margin: 50px 0;
    padding: 40px 10px;
  }
`;

export const Header = styled.header`
  position: absolute;
  top: -80px;

  @media only screen and (max-width: ${constants.breakpoints.LARGE}) {
    left: 0;
    top: -60px;
  }
  
  @media only screen and (max-width: ${constants.breakpoints.MEDIUM}) {
    left: 0;
    top: -50px;
  }
`;

export const Subheader = styled.div`
  width: 100%;
  margin-bottom: 10px;
`
