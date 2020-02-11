import styled from 'styled-components';

interface PanelProps {
  open: boolean;
  position: 'top' | 'bottom';
}

export const Panel = styled.section<PanelProps>`
  width: 100%;
  position: relative;
  flex: 1;
  transition: all 0.318s;
  opacity: 1;
  ${(props: PanelProps): string => `${props.position}: 0px;`}

  ${(props: PanelProps): string =>
    props.open &&
    `
    opacity: 0;
    ${props.position}: -300px;
  `}
`;

export const Container = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  ${Panel}:first-child {
    background: #4a95d4;
  }

  ${Panel}:last-child {
    background: #3b79aa;
  }
`;

interface ButtonWrapperProps {
  hidden: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  position: fixed;
  top: calc(50% - 40px);
  left: 0;
  width: 100%;
  display: flex;
  z-index: 999;
  justify-content: center;
  transition: all 0.318s;
  opacity: 1;

  ${(props: ButtonWrapperProps): string => props.hidden && `opacity: 0`}
`;
