import styled, {createGlobalStyle} from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background: #39373a;
`;

export const lockedPage = createGlobalStyle`
  html {
    overflow: hidden;
  }
`
