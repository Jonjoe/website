import * as React from "react";
import * as Styled from "./Page.styles";

import { Topbar, Asides, Text, Icon } from "components";

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

      <Text.Inline align="center">
        Made with <Icon name="heart" size="1rem" /> by <strong>me</strong> ...
        duhh
      </Text.Inline>
      
      <Text.Inline align="center">
        <Icon name="copyright" size="0.8rem"/>
        Copyright 1969
      </Text.Inline>
    </Styled.OuterContainer>
  );
};

export default Page;
