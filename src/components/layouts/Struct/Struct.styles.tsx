import styled from "styled-components";

interface StructWrapperProps {
  column?: boolean;
  size?: number;
  padded?: boolean;
  hPadded?: boolean;
  vPadded?: boolean;
  fixedHeight?: number;
  fixedWidth?: number;
  centered?: boolean;
}

export const StructWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex:1;
  padding: 0;
  
  ${(props: StructWrapperProps) => props.padded && `padding: 10px;`};
  ${(props: StructWrapperProps) => props.size && `flex: 1;`};

  ${(props: StructWrapperProps) =>
    props.column &&
    `
      flex-direction: column;
      width: 100%;
      max-width: 100%;
    `};

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
    props.centered &&
    `
      align-items: center;
      justify-content: center;
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
