import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
  height: 80vh;
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  z-index: 800;
  //background-color: green;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 200;
  background-image: url('/images/landing.jpg');
  filter: blur(5px) grayscale(50%);
`;
