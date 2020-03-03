import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const Point = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px;

  h6 {
    margin-top: 25px;
  }

  @media only screen and (max-width: 600px) {
    width: 50%;
    margin: 0;
  }
`;
