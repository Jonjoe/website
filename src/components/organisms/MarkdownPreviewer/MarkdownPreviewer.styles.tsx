import styled from "styled-components";
import { theme } from "config";

export const Container = styled.article`
  width: 100%;
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  a,
  table,
  tr,
  td,
  th,
  ul,
  li,
  ol {
    font-family: Gilroy;
    padding: 0;
    margin: 0;
    text-align: left;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 900;
    margin-top: 20px;
    margin-bottom: 50px;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.8rem;
  }

  h3 {
    font-size: 2.6rem;
    margin-bottom: 20px;
  }

  ul {
    margin-bottom: 20px;
    margin-left: 20px;
  }

  table {
    overflow-y: scroll;
    td, th {
      padding: 5px;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 20px;
    > strong {
      font-weight: 900;
      color: ${theme.pallet.BLUE};
    }
  }
`;
