import styled from "styled-components";

interface StyledDividerProps {
  left?: boolean;
  soft?: boolean;
}

export const Divider = styled.div<StyledDividerProps>`
  width: 40%;
  margin: 30px 30% 30px 30%;
  border-bottom: 5px solid white;

  ${(props: StyledDividerProps) =>
    props.left &&
    `
    margin: 20px 0;
    `}
  
  ${(props: StyledDividerProps) =>
    props.soft &&
    `
    border-width: 2px;
    `}
`;
