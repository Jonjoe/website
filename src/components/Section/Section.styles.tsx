import styled from 'styled-components';

interface ContainerProps {
  background?: string;
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  width: 100%;
  position: relative;

  ${(props: ContainerProps) =>
    props.background
      ? `background-color: ${props.background};`
      : `background-color: transparant;`}

  &:before, &:after {
    content: '';
    position: absolute;
    height: 100px;
    width: 100%;
    display: block;
  }

  &:before {
    top: -98px !important;
    ${(props: ContainerProps) =>
      props.background
        ? `background-color: ${props.background};`
        : `background-color: transparant;`}
  }

  &:after {
    bottom: -99px;
    z-index: 900;

    ${(props: ContainerProps) =>
      props.background
        ? `background-color: ${props.background};`
        : `background-color: transparant;`}
  }

  &:nth-child(2) {
    padding-top: 50px!important;
    &:before,
    &:after {
      display: none;
    }
  }

  &:last-child {
    padding-top: 200px!important;
    padding-bottom: 50px!important;

    &:before,
    &:after {
      display: none;
    }
  }

  &:nth-child(odd) {
    padding-top: 50px;
    padding-bottom: 200px;
    
    &:before {
      clip-path: polygon(0% 75%, 100% 0%, 100% 100%, 0% 100%);
      top: -100px;
    }

    &:after {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 25%);
    }
  }

  &:nth-child(even) {
    padding-top: 150px;
    padding-bottom: 150px;

    &:before {
      display: none;
    }

    &:after {
      clip-path: polygon(0% 0%, 100% 0%, 100% 25%, 0% 100%);
    }
  }
`;



