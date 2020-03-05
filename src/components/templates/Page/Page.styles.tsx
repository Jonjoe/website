import styled from "styled-components";
import { theme } from "config"

export const OuterContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 20px 20px 50px 20px;
  position: relative;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.pallet.LIGHT_GREY};
  padding: 100px;
  width: 100%;
  max-width: 1100px;
  box-sizing: border-box;
  position: relative;
  z-index: 999;
  margin-bottom: 50px;
`;
