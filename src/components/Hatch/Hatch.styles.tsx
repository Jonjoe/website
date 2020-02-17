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
  z-index: 900;
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

    ${props.open &&
      `
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
  width: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;

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
  bottom: calc(50% - 30px);
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: center;
  opacity: 1;

  @keyframes slideButton {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 0;
      top: 9999px;
    }
  }

  ${(props: ButtonWrapperProps): string | false =>
    props.hidden &&
    `
    animation-name: slideButton;
    animation-fill-mode: forwards;
    animation-duration: 1s;
  `}
`;
