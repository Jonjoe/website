import styled from "styled-components";
import { theme, breakpoints } from "config";

interface StyledButtonProps {
  width?: string;
  hero?: boolean;
}

export const Button = styled.button<StyledButtonProps>`
  width: ${(props: StyledButtonProps) => (props.width ? props.width : `100%`)};
  padding: 10px 20px;

  border: 5px solid
    ${(props: StyledButtonProps) =>
      props.hero ? theme.pallet.BLACK : theme.pallet.WHITE};

  background: ${(props: StyledButtonProps) =>
    props.hero ? theme.pallet.BLACK : theme.pallet.WHITE};

  ${(props: StyledButtonProps) => props.hero && "margin: 10px"};

  color: white;

  > * {
    text-transform: uppercase;
    justify-content: center;
    text-align: center;
    font-weight: 900;
  }

  &:hover {
    cursor: pointer;
    background: transparant;
  }

  @media only screen and (max-width: ${breakpoints.SMALL}) {
    width: 100%;
  }
`;
