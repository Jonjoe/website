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
`;

export const Header = styled.header`
  position: absolute;
  top: -80px;
`;
