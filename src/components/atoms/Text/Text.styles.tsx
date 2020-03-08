import styled from "styled-components";
import { theme, breakpoints } from "config";

import { DynamicTypeProps } from "./Text.component";

function getBaseTypography(props: DynamicTypeProps) {
  const fontWeight: string = props.strong ? "900" : "300";
  const fontColor: string = props.inverted
    ? theme.pallet.WHITE
    : theme.pallet.BLACK;

  const textAlignment: string = props.align ? props.align : "left";

  return `
    font-family: Gilroy;
    padding: 0;
    margin: 0;
    max-width: 550px;
    text-align: ${textAlignment};
    font-weight: ${fontWeight};
    color: ${fontColor};
  `;
}

export const Heading1 = styled.h1<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}
  font-size: 5.5rem;
  font-weight: 900;
  max-width: 100%;
  margin-bottom: 20px;

  @media only screen and (max-width: ${breakpoints.MEDIUM}) {
    font-size: 4rem;
  }
`;

export const Heading2 = styled.h2<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}
  font-size: 6rem;
  font-weight: 900;
  max-width: 100%;

  &:after {
    content: ".";
    display: "block";
  }

  @media only screen and (max-width: ${breakpoints.LARGE}) {
    font-size: 3rem;
  }
`;

export const Heading3 = styled.h3<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}
  font-size: 2.2rem;
  max-width: 100%;
  text-transform: uppercase;

  @media only screen and (max-width: ${breakpoints.MEDIUM}) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: ${breakpoints.SMALL}) {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

export const Heading4 = styled.h4<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}
`;

export const Heading5 = styled.h5<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}

  font-size: 1.8rem;
  font-weight: 500;
  > strong {
    font-weight: 900;
    color: ${theme.pallet.BLUE};
  }
`;

export const Heading6 = styled.h6<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}
  font-size: 1.2rem;
  font-weight: 900;
  > strong {
    font-weight: 900;
    color: ${theme.pallet.BLUE};
  }
`;

export const Inline = styled.span<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)};

  display: flex;
  width: 100%;

  > strong {
    font-weight: 900;
    margin-left: 5px;
    margin-right: 5px;
  }

  > div {
    margin-left: 5px;
    margin-right: 5px;
  }

  ${(props: DynamicTypeProps) => {
    switch (props.align) {
      case "left":
        return "justify-content: flex-start";

      case "right":
        return "justify-content: flex-end";

      case "center":
        return "justify-content: center";

      default:
        return "justify-content: flex-start";
    }
  }}
`;

export const Body = styled.p<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)};

  > strong {
    font-weight: 900;
  }
`;
