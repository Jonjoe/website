import * as React from "react";
import * as Styled from "./Page.styles";

import { Topbar, Asides } from "components";

interface PageProps {
  children: JSX.Element[] | JSX.Element;
}

const Page: React.FC<PageProps> = props => {
  const { children } = props;

  return (
    <Styled.OuterContainer>
      <Topbar />
      <Styled.InnerContainer>{children}</Styled.InnerContainer>
      <Asides />
    </Styled.OuterContainer>
  );
};

export default Page;
