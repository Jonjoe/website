import * as React from "react";
import * as Styled from "./Page.styles";

import { Topbar } from "components";

interface PageProps {
  children: JSX.Element[] | JSX.Element;
}

const Page: React.FC<PageProps> = props => {
  const { children } = props;

  return (
    <Styled.Container>
      <Topbar />
      <div>{children}</div>
    </Styled.Container>
  );
};

export default Page;
