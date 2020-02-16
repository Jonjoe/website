import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  width: 100%;
`;

export const Title = styled.header`
  position: relative;
  width: 100%;
  display: flex;

  justify-content: center;
  &:after {
    content: '';
    position: absolute;
    z-index: 700;
    left: 10%;
    top: calc(50% - 2px);
    width: 80%;
    border-bottom: 5px solid white;
  }
`;

export const TitleContent = styled.div`
  z-index: 800;
  padding: 0 50px;
  background-color: #39373a;
`;
