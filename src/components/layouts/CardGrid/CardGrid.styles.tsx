import styled, { keyframes, css } from "styled-components";
import { constants } from "config";

const fadeIn = keyframes`
  0% { 
    opacity: 0;
    bottom: -200px;
  }
  50% {
    opacity: 0;
  }
  100% { 
    bottom: 0px;
  }
`;

const fadeInAnimation = css`
  animation: ${fadeIn} 0.75s ease-in;
`

interface StyledContainerProps {
  animated?: boolean;
}

export const Container = styled.div<StyledContainerProps>`
  position: relative;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  
  ${props => props.animated && fadeInAnimation}

  @media only screen and (max-width: ${constants.breakpoints.MEDIUM}) {
    grid-template-columns: 1fr;
  }
`;
