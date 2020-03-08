import styled from "styled-components";
import { breakpoints } from "config";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Point = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px;

  h6 {
    margin-top: 25px;
  }

  @media only screen and (max-width: ${breakpoints.MEDIUM}) {
    margin: 20px;

    svg {
      font-size: 3rem;
    }
  }
  
  @media only screen and (max-width: ${breakpoints.SMALL}) {
    margin: 15px;

    svg {
      font-size: 2.5rem;
    }
  }
`;
