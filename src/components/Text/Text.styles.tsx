import styled from 'styled-components'

export const Heading1 = styled.h1`
  font-family: Gilroy;
`
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
`
export const Heading3 = styled.h3`
  font-family: Gilroy;
  font-size: 2rem;
  color: white;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin: 0;
  padding: 0;

`

export const HeroBody = styled.p`
  font-family: Gilroy;
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
`
export const Body = styled.p`
  font-family: Gilroy;
  margin: 0;
  padding: 0;
`
