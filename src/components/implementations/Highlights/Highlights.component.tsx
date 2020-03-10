import * as React from "react";
import * as Styled from "./Highlights.styles";

const data = ["", "", ""];

const Highlights: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.InnerContainer>
        {data.map(item => (
          <Styled.Entry>
            <p>Item</p>
          </Styled.Entry>
        ))}
      </Styled.InnerContainer>
    </Styled.Container>
  );
};

export default Highlights;
