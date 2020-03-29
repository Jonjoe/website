import styled, { keyframes } from "styled-components";
import { theme } from "config";

const loading = keyframes`
  0% { width: 60% }
  100% { width: 100% }
`;

export const Container = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
`;

export const Loadingbar = styled.div`
  padding: 5px;
  width: 100%;
  max-width: 300px;
  position: relative;

  &:before,
  &:after {
    border: 5px solid ${theme.pallet.WHITE};
    position: absolute;
    content: "";
    display: block;
    height: 20px;
    width: 20px;
  }

  &:before {
    top: -5px;
    left: -5px;
    border-right: none;
    border-bottom: none;
  }

  &:after {
    bottom: -5px;
    right: -5px;
    border-left: none;
    border-top: none;
  }
`;

export const Text = styled.div`
  position: absolute;
  left: 10px;
  height: 100%;
  display: flex;
  align-items: center;

  > p {
    color: ${theme.pallet.BLUE};
    text-transform: uppercase;
    font-weight: 900;
    font-size: 2rem;
    text-align: center;
  }
`;

export const Bar = styled.div`
  height: 50px;
  background: ${theme.pallet.WHITE};
  animation: ${loading} 1s infinite;
`;
