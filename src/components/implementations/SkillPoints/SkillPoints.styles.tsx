import styled from "styled-components";

import { constants } from "config";

export const Container = styled.div`
  display: flex;
  width: 100%;
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

  @media only screen and (max-width: ${constants.breakpoints.MEDIUM}) {
    margin: 20px;

    svg {
      font-size: 3rem;
    }
  }
  
  @media only screen and (max-width: ${constants.breakpoints.SMALL}) {
    width: 100%;

    svg {
      font-size: 4rem;
    }

    h6 {
      font-size: 1.5rem;
    }
  }
`;
