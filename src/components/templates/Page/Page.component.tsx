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
      <Styled.InnerContainer>{children}</Styled.InnerContainer>
      <Asides accent={accent} />
      <Footer />
    </Styled.OuterContainer>
  );
};

export default Page;
