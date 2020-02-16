import styled from 'styled-components'

export const Heading1 = styled.h1``
export const Heading2 = styled.h2`
  font-size: 5rem;
  color: white;
  text-transform: uppercase;
  font-weight: 900;
  text-align: center;
  margin: 0;
  padding: 0;
`
export const Heading3 = styled.h3`
  font-size: 4rem;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding: 0;

  &:after {
    content: '';
    width: 50%;
    border: 2px solid white;
  }
`

export const HeroBody = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
`
export const Body = styled.p`
  margin: 0;
  padding: 0;
`
