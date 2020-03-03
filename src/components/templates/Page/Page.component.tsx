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

      <Text.Body align="center">
        Made with <Icon name="heart" size="1rem" /> by <strong>me</strong> ...
        duhh
      </Text.Body>
      <Text.Body align="center">
        <Icon name="copyright" size="0.8rem"/>
        Copyright 1969
      </Text.Body>
    </Styled.OuterContainer>
  );
};

export default Page;
