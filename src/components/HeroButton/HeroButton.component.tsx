import * as React from "react";
import * as Styled from "./HeroButton.styles"

export interface HeroButtonProps {
  label: string;
  onClick: () => any;
}

const HeroButton: React.FC<HeroButtonProps> = props => {
  const { onClick, label } = props

  return <Styled.Button onClick={() => onClick()}><p>{label}</p></Styled.Button>
}

export default HeroButton
