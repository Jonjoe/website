import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-family: Gilroy;
  color: white;
`;

export const Heading2 = styled.h2`
  font-family: Gilroy;

  font-size: 4rem;
  color: white;
  text-transform: uppercase;
  font-weight: 900;
  text-align: center;
  margin: 0 0 50px 0;
  padding: 0;
  position: relative;

  &:after {
    content: '';
    width: 50%;
    position: absolute;
    bottom: -10px;
    left: 25%;
    border: 2px solid white;
  }

  @media only screen and (max-width: 600px) {
    //margin: 0 0 20px 0;
    font-size: 2.2rem;
  }
`;

export const Heading3 = styled.h3`
  font-family: Gilroy;
  font-size: 2rem;
  color: white;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin: 0;
  padding: 0;
  
  @media only screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const Heading4 = styled.h4`
  font-family: Gilroy;
  font-size: 2rem;
  color: white;
  font-weight: 900;
  text-align: right;
  margin: 0;
  padding: 0;
  > strong {
    color: #4a95d4;
  }

  @media only screen and (max-width: 600px) {
    text-align: center;
    margin-bottom: 50px;
  };
`

export const SectionTitle = styled.h3`
  font-family: Gilroy;
  font-size: 5rem;
  color: white;
  text-transform: uppercase;
  font-weight: 900;
  width: 215px;
  margin: 0;
  padding: 0;
  word-wrap: break-word;
  margin-bottom: 50px;

  &:after {
    content: '.'
  }
  
  @media only screen and (max-width: 600px) {
    //margin-bottom: 50px;
  };
`

export const HeroBody = styled.p`
  font-family: Gilroy;
  margin: 0;
  padding: 0;
  color: white;
  font-weight: 900;
  font-size: 1.5rem;
  
  @media only screen and (max-width: 600px) {
    text-align: center;
  };
`;

export const Body = styled.p`
  font-family: Gilroy;
  margin: 0;
  color: white;
  padding: 0;

  @media only screen and (max-width: 600px) {
    text-align: center;
  };
`;
