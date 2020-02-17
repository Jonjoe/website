import styled, {createGlobalStyle} from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  background: #39373a;
`;

export const lockedPage = createGlobalStyle`
  html {
    height: 100vh;
    overflow: hidden;
  }
`
