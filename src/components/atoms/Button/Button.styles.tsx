import styled from "styled-components";

interface StyledButtonProps {
  width?: string;
}

export const Button = styled.button<StyledButtonProps>`
  width: ${(props: StyledButtonProps) => (props.width ? props.width : `100%`)};
  padding: 10px 20px;
  border: 2px solid white;
  background: none;
  color: white;
`;
