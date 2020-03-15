import styled from "styled-components";
import { theme } from "config";

interface StyledContainerProps {
  basic?: boolean;
  active?: boolean;
}

export const Container = styled.div`
  padding: 5px 15px;
  margin-right: 5px;
  margin-bottom: 5px;
  transition: all 0.318s;

  > p {
    transition: all 0.318s;
    color: ${theme.pallet.WHITE};
  }

  ${(props: StyledContainerProps) => 
    props.basic
      ? `
        background: rgba(255,255,255,0.5);
      `
      : `
        border: 2px solid ${theme.pallet.WHITE};
        &:hover {
          cursor: pointer;
          background: ${theme.pallet.WHITE};

          > p {
            color: ${theme.pallet.RED};
          }
        }
      `
  } 

  ${(props: StyledContainerProps) => 
    props.active &&
      `
         background: ${theme.pallet.WHITE};

          > p {
            color: ${theme.pallet.RED};
          }
      `
  }
`;
