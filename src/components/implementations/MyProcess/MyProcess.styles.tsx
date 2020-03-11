import styled from "styled-components";
import { theme } from "config";

export const Container = styled.div``;

export const EventContainer = styled.div`
  height: 100%;
  width: 100%;
  border: 5px solid ${theme.pallet.BLACK};
  padding: 5px;
  border-radius: 50%;
  position: relative;
  z-index: 900;
  background: white;
`

export const EventInnerContainer = styled.div`
  height: 100%;
  width: 100%;
  background: ${theme.pallet.BLACK};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const EventBar = styled.div`
  height: 70px;
  width: 5px;
  background: ${theme.pallet.BLACK};
  position: absolute;
  left: calc(50% - 2.5px);
  bottom: -70px;
  z-index: 700;
`

export const Event = styled.div`
  height: 120px;
  width: 120px;
  margin-bottom: 50px;

  &:last-child {
    ${EventBar} {
      display: none;
    }
  }
`;


export const EventShield = styled.div``
