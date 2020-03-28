import styled from "styled-components";
import { breakpoints } from "app-constants"

export const Container = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: ${breakpoints.MEDIUM}) {
    grid-template-columns: 1fr;
  }
`;
