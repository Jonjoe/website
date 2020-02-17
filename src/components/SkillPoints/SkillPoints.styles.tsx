import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
   
  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
    margin-bottom: 50px;
  } 
`;

export const Point = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  color: white;

  p {
    margin-top: 15px;
  }

  @media only screen and (max-width: 600px) {
    width: 50%;
    margin: 0;
  } 
`;
