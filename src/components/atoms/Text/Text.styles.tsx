import styled from "styled-components";

import { DynamicTypeProps } from "./Text.component";

function getBaseTypography(props: DynamicTypeProps) {
  const fontWeight: string = props.strong ? "900" : "300";
  const fontColor: string = props.inverted ? "white" : "#39373a";
  const textAlignment: string = props.centered ? "center" : "left";

  return `
    font-family: Gilroy;
    padding: 0;
    margin: 0;
    text-align: ${textAlignment};
    font-weight: ${fontWeight};
    color: ${fontColor};
  `;
}

export const Heading1 = styled.h1<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}
  font-size: 5.5rem;
  font-weight: 900;
`;

export const Heading2 = styled.h2<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}
`;

export const Heading3 = styled.h3<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}
  font-size: 2rem;
`;

export const Heading4 = styled.h4<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}
`;

export const Heading5 = styled.h5<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}
`;

export const Body = styled.p<DynamicTypeProps>`
  ${(props: DynamicTypeProps) => getBaseTypography(props)}
`;
