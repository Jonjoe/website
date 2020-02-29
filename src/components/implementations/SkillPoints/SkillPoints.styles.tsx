import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

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
  color: white;

  p {
    margin-top: 15px;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    width: 50%;
    margin: 0;
  }
`;