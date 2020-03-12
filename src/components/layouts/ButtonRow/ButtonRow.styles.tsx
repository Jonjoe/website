import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  > * {
    margin: 0px 10px 5px 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
