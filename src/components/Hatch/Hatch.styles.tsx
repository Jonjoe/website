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
  display: flex;
  z-index: 500;
  justify-content: center;
  align-items: center;

  ${(props: PanelProps): string => `
    ${props.position}: 0;
  
    @keyframes slideOut${props.position} {
      0% { 
        ${props.position}: 0;
        opacity: 1;
      }

      50% {
        opacity: 1;
      }

      90% {
        opacity: 0;
      }
  
      100% {
        ${props.position}: -1500px;
        display: none!important;
        opacity: 0;
      }
    }

    ${props.open && `
      animation-name: slideOut${props.position};
      animation-fill-mode: forwards;
      animation-duration: 3s;
    `}
  `}
`;

export const Container = styled.div`
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
  bottom: calc(50% - 40px);
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: center;
  opacity: 1;

  ${(props: ButtonWrapperProps): string => props.hidden && `
    bottom: 1500px;
    opacity: 0;
  `}
`;
