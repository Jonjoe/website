import * as React from "react";
import * as Styled from "./Loading.styles";

import { Text } from "components";

interface LoadingProps {
  accent: string;
}

function Loading(props: LoadingProps): JSX.Element {
  const { accent } = props

  return (
    <Styled.Container>
      <Styled.Loadingbar>
        <Styled.Text accent={accent}>
          <Text.Body>Loading</Text.Body>
        </Styled.Text>
        <Styled.Bar />
      </Styled.Loadingbar>
    </Styled.Container>
  );
}

export default Loading as React.FC<LoadingProps>;
