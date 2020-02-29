import styled from 'styled-components';

const headingBaseStyles = `
  font-family: Gilroy;
  font-weight: 900;
  font-size: 2rem;
  color: white;
  margin: 0;
  padding: 0;
;
`

export const Heading1 = styled.h1`
  ${headingBaseStyles}  
`;

export const Heading2 = styled.h2`
  ${headingBaseStyles}  
  
  font-size: 4rem;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 50px 0;
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
  ${headingBaseStyles}  
  
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const Heading4 = styled.h4`
  ${headingBaseStyles}  
  
  text-align: right;
  
  > strong {
    color: #4a95d4;
  }

  @media only screen and (max-width: 600px) {
    text-align: center;
    margin-bottom: 50px;
  }
`;

export const Heading5 = styled.h5`
  ${headingBaseStyles}  
`

export const SectionTitle = styled.h3`
  ${headingBaseStyles}  
  
  font-size: 5rem;
  color: white;
  text-transform: uppercase;
  
  &:after {
    content: '.';
  }

  @media only screen and (max-width: 600px) {
    //margin-bottom: 50px;
  }
`;

export const HeroBody = styled.p`
  font-family: Gilroy;
  margin: 0;
  padding: 0;
  color: white;
  font-weight: 900;
  font-size: 1.5rem;

  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

interface StyledBodyProps {
  strong?: boolean;
}

export const Body = styled.p<StyledBodyProps>`
  font-family: Gilroy;
  margin: 0;
  color: white;
  padding: 0;
  font-size: 1.2rem;

  ${(props: StyledBodyProps) => props.strong && `font-weight: 900;`}

  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;
