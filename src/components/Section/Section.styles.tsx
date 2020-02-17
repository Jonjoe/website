import styled from 'styled-components';

interface ContainerProps {
  background?: string;
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 150px 0;
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
    bottom: -100px;
    z-index: 900;

    ${(props: ContainerProps) =>
      props.background
        ? `background-color: ${props.background};`
        : `background-color: transparant;`}
  }

  &:nth-child(2) {
    padding-top: 150px!important;
    padding-bottom: 250px!important;
    
    &:before,
    &:after {
      display: none;
    }
  }

  &:last-child {
    padding-top: 250px!important;
    &:before,
    &:after {
      display: none;
    }
  }

  &:nth-child(odd) {
    padding-top: 150px;
    
    &:before {
      clip-path: polygon(0% 75%, 100% 0%, 100% 100%, 0% 100%);
      top: -100px;
    }

    &:after {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 25%);
    }
  }

  &:nth-child(even) {
    padding-top: 250px;

    &:before {
      display: none;
    }

    &:after {
      clip-path: polygon(0% 0%, 100% 0%, 100% 25%, 0% 100%);
    }
  }
`;

export const Title = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  &:after {
    content: '';
    position: absolute;
    z-index: 700;
    left: 10%;
    top: calc(50% - 2px);
    width: 80%;
    border-bottom: 5px solid white;
  }
`;

interface TitleContentProps {
  background?: string;
}

export const TitleContent = styled.div<TitleContentProps>`
  z-index: 800;
  padding: 0 50px;
  background-color: ${(props: TitleContentProps) =>
    props.background ? props.background : '#39373a'};
`;
