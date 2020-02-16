import styled from 'styled-components';

interface ContainerProps {
  background?: string;
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  width: 100%;
  position: relative;

  ${(props: ContainerProps) =>
    props.background
      ? `background-color: ${props.background};`
      : `background-color: transparant;`}

  &:nth-last-child(2) {
    margin-bottom: 40px;
    padding-bottom: 50px;
    &:after {
      content: '';
      width: 0;
      height: 0;
      border-left: 50vw solid transparent;
      border-right: 50vw solid transparent;
      position: absolute;
      bottom: -60px;

      ${(props: ContainerProps) =>
        props.background
          ? `border-top: 60px solid ${props.background};`
          : `border-top: 60px solid transparant;`}
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
