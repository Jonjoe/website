import styled from 'styled-components';

export interface StyledButtonProps {
  onClick: any;
}

export const Button = styled.button<StyledButtonProps>`
  background: #e0795f;
  border: none;
  border-bottom: 8px solid #dd532c;
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
    border-bottom: 0px solid #dd532c;
  }

  span {
    color: white;
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`;
