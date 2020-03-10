import styled from "styled-components";
import { theme } from "config";

export const Container = styled.div`
  width: 100%;
`;

export const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;

  &:before {
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    width: 5px;
    left: calc(50% - 2.5px);
    border-left: 5px solid ${theme.pallet.WHITE};
  }
`;

export const Entry = styled.article`
  height: 200px;
  width: calc(50% - 20px);
  margin-bottom: 20px;
  background: lightgreen;

  &:nth-child(even) {
    align-self: flex-end;
  }
`;
