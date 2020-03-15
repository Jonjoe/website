import styled from "styled-components";
import { theme } from "config";

export const Container = styled.div`
  padding: 5px 15px;
  margin-right: 5px;
  margin-bottom: 5px;
  border: 2px solid ${theme.pallet.WHITE};
  transition: all 0.318s;

  > p {
    transition: all 0.318s;
    color: ${theme.pallet.WHITE};
  }

  &:hover {
    cursor: pointer;
    background: ${theme.pallet.WHITE};

    > p {
      color: ${theme.pallet.RED};
    }
  }
`;
