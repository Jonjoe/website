import * as React from "react";
import * as Styled from "./Technologies.styles";

import { Icon, Text } from "components";
import { IconName } from "components/atoms/Icon/Icon.component";

interface ItemProps {
  iconName: IconName;
  label: string;
}

const Item: React.FC<ItemProps> = props => {
  const { label, iconName } = props;
  return (
    <Styled.ItemContainer>
      <Icon name={iconName} size="3rem" />
      <Text.Inline>{label}</Text.Inline>
    </Styled.ItemContainer>
  );
};

const Technologies: React.FC = () => (
  <Styled.Container>
    <Item label="HTML5" iconName="html" />
    <Item label="CSS3" iconName="css" />
    <Item label="ES6 - ES9" iconName="javascript" />
    <Item label="React" iconName="react" />
    <Item label="React Native" iconName="react-native" />
    <Item label="Typescript" iconName="typescript" />
    <Item label="NodeJS" iconName="nodejs" />
    <Item label="AWS" iconName="aws" />
  </Styled.Container>
);

export default Technologies;
