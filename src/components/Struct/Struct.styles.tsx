import styled from 'styled-components';

interface StructWrapperProps {
  column?: boolean;
  size?: number;
  padded?: boolean;
  hPadded?: boolean;
  vPadded?: boolean;
  fixedHeight?: number;
  fixedWidth?: number;
}

export const StructWrapper = styled.div`
  display: flex;
  padding: ${(props: StructWrapperProps) => (props.padded ? '10px' : '0')};
  flex: ${(props: StructWrapperProps) => (props.size ? props.size : 1)};

  flex-direction: ${(props: StructWrapperProps) =>
    props.column ? 'column' : 'row'};

  ${(props: StructWrapperProps) =>
    props.vPadded &&
    `
      padding-top: 20px;
      padding-bottom: 20px;
    `}
  
  ${(props: StructWrapperProps) =>
    props.hPadded &&
    `
      padding-left: 20px;
      padding-right: 20px;
    `}

  ${(props: StructWrapperProps) =>
    props.fixedWidth &&
    `
      width: ${props.fixedWidth}px;
      min-width: ${props.fixedWidth}px;
      max-width: ${props.fixedWidth}px;
    `};

  ${(props: StructWrapperProps) =>
    props.fixedHeight &&
    `
      height: ${props.fixedHeight}px;
      min-height: ${props.fixedHeight}px;
      max-height: ${props.fixedHeight}px;
    `};
`;
