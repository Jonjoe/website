import * as React from "react";
import * as Styled from "./Page.styles";

import { Asides, Topbar, Footer, MobileNavigation } from "components";

interface PageProps {
  children: JSX.Element[] | JSX.Element;
  accent: string;
  padded?: boolean;
}

function Page(props: PageProps){
  const { children, accent, padded } = props;

  return (
    <Styled.OuterContainer>
      <Topbar />
      <Asides accent={accent} />
      <MobileNavigation />
      <Styled.InnerContainer padded={padded}>{children}</Styled.InnerContainer>
      <Footer />
    </Styled.OuterContainer>
  );
};

export default Page as React.FC<PageProps> 
