import * as React from "react";
import * as Styled from "./CardGrid.styles";

interface CardGridProps {
  animated?: boolean;
  children: React.ReactNode;
}

function CardGrid(props: CardGridProps) {
  const { animated, children } = props;

  return <Styled.Container animated={animated}>{children}</Styled.Container>
}

export default CardGrid as React.FC<CardGridProps>;
