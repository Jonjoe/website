import styled from 'styled-components';

export interface StyledButtonProps {
  onClick: any;
}

export const Button = styled.button<StyledButtonProps>`
  font-family: Gilroy;
  background: #e0795f;
  color: white;
  border: none;
  padding: 20px 0px;
  width: 200px;
  transition: all 0.318s;
  z-index: 999;
  position: relative;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }

  span {
    color: white;
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`;
