import * as React from "react";
import * as Styled from "./Loading.styles";

import { Text } from "components";

function Loading(): JSX.Element {
  return (
    <Styled.Container>
      <Styled.Loadingbar>
        <Styled.Text>
          <Text.Body>Loading</Text.Body>
        </Styled.Text>
        <Styled.Bar />
      </Styled.Loadingbar>
    </Styled.Container>
  );
}

export default Loading as React.FC;
