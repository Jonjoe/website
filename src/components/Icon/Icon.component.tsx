import * as React from "react";

import { library, IconProp } from "@fortawesome/fontawesome-svg-core";
import { fad } from "@fortawesome/pro-duotone-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fal, fad, fas);

export type IconName =
  | "question-circle"

export interface IconProps {
  name: IconName;
  iconColor?: string;
}

function mapNamePropToFaNames(iconName: IconName): string | string[] {
  switch (iconName) {
    case "question-circle":
      return ["fal", "question-circle"];

    default:
      return iconName;
  }
}

const Icon: React.FC<IconProps> = (props: IconProps): JSX.Element => {
  const { name, iconColor } = props;

  const iconName = mapNamePropToFaNames(name);

  return (
    <FontAwesomeIcon
      color={iconColor}
      size={"lg"}
      icon={iconName as IconProp}
    />
  );
};

export default Icon;

