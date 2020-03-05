import * as React from "react";
import * as Styled from "./Page.styles";

import { Asides, Topbar, Footer } from "components";

interface PageProps {
  children: JSX.Element[] | JSX.Element;
  accent: string
}

const Page: React.FC<PageProps> = props => {
  const { children, accent } = props;

  return (
    <Styled.OuterContainer>
      <Topbar />
      <Asides accent={accent} />
      <Styled.InnerContainer>{children}</Styled.InnerContainer>
      <Footer />
    </Styled.OuterContainer>
  );
};

export default Page;
