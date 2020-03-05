import * as React from "react";
import * as Styled from "./Page.styles";

import { Asides, Topbar, Footer } from "components";

interface PageProps {
  children: JSX.Element[] | JSX.Element;
}

const Page: React.FC<PageProps> = props => {
  const { children } = props;

  return (
    <Styled.OuterContainer>
      <Topbar />
      <Asides />
      <Styled.InnerContainer>{children}</Styled.InnerContainer>
      <Footer />
    </Styled.OuterContainer>
  );
};

export default Page;
