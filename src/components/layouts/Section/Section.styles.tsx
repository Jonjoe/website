import styled from "styled-components";

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

  &:before {
    display: block;
    content: "";
    height: 50px;
    width: 50px;
    border-top: 5px solid black;
    border-right: 5px solid black;
    border-bottom: 0px solid black;
    border-left: 0px solid black;
    position: absolute;
    top: -10px;
    right: -10px;

    ${(props: ContainerProps) =>
      props.background
        ? `border-color: ${props.background};`
        : `border-color: transparant;`}
  }
  &:after {
    display: block;
    content: "";
    height: 50px;
    width: 50px;
    border-top: 0px solid black;
    border-right: 0px solid black;
    border-bottom: 5px solid black;
    border-left: 5px solid black;
    position: absolute;
    bottom: -10px;
    left: -10px;

    ${(props: ContainerProps) =>
      props.background
        ? `border-color: ${props.background};`
        : `border-color: transparant;`}
  }
`;

export const Header = styled.header`
  position: absolute;
  top: -80px;
`;
