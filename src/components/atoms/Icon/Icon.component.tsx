import * as React from "react";

import { library, IconProp } from "@fortawesome/fontawesome-svg-core";
import { fad } from "@fortawesome/pro-duotone-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as Styled from "./Icon.styles";

library.add(fal, fab, fad, fas, far);

export type IconName =
  | "question-circle"
  | "dribbble"
  | "twitter"
  | "github"
  | "copyright"
  | "code"
  | "alien"
  | "d10"
  | "heart"
  | "hexagon"
  | "lab"
  | "code2"
  | "file"
  | "folder"
  | "cross"
  | "scroll"
  | "bars"
  | "rocket"
  | "bullseye"
  | "bulletpoint"
  | "glasses"
  | "view"
  | "linkedin"
  | "react-native"
  | "react"
  | "html"
  | "css"
  | "react"
  | "typescript"
  | "javascript"
  | "nodejs"
  | "aws"
  | "email";

export interface IconProps {
  name: IconName;
  size?: string;
  color?: string;
}

function mapNamePropToFaNames(iconName: IconName): string | string[] {
  switch (iconName) {
    case "question-circle":
      return ["fal", "question-circle"];

    case "dribbble":
      return ["fab", "dribbble"];

    case "twitter":
      return ["fab", "twitter"];
    
    case "view":
      return ["fad", "external-link"];
    
    case "lab":
      return ["fad", "flask"];

    case "heart":
      return ["fad", "heart"];

    case "copyright":
      return ["fal", "copyright"];

    case "glasses":
      return ["fad", "glasses"];
    
    case "bars":
      return ["fad", "bars"];

    case "cross":
      return ["fad", "times"];

    case "folder":
      return ["fad", "folder-open"];

    case "file":
      return ["fad", "file-alt"];

    case "hexagon":
      return ["fal", "hexagon"];

    case "alien":
      return ["fad", "alien"];
    
    case "scroll":
      return ["fad", "scroll-old"];
    
    case "d10":
      return ["fad", "dice-d10"];

    case "bullseye":
      return ["fad", "bullseye-arrow"];

    case "bulletpoint":
      return ["fad", "chevron-double-right"];

    case "code":
      return ["fad", "code"];

    case "code2":
      return ["fad", "brackets"];

    case "aws":
      return ["fab", "aws"];

    case "javascript":
      return ["fab", "js"];

    case "html":
      return ["fab", "html5"];

    case "css":
      return ["fab", "css3-alt"];

    case "react":
      return ["fab", "react"];

    case "typescript":
      return ["fad", "brackets-curly"];

    case "nodejs":
      return ["fab", "node"];

    case "github":
      return ["fab", "github"];

    case "rocket":
      return ["fad", "rocket-launch"];

    case "linkedin":
      return ["fab", "linkedin-in"];

    case "email":
      return ["fal", "envelope-open-text"];

    default:
      return iconName;
  }
}

const Icon: React.FC<IconProps> = (props: IconProps): JSX.Element => {
  const { name, size, color } = props;

  const iconName = mapNamePropToFaNames(name);

  if (name === "react-native") {
    return (
      <Styled.Icon size={size}>
        <FontAwesomeIcon icon={["fal", "mobile-android"]} />
        <FontAwesomeIcon icon={["fab", "react"]} />
      </Styled.Icon>
    );
  }

  return (
    <Styled.Icon size={size}>
      <FontAwesomeIcon
        color={color}
        size={"lg"}
        icon={iconName as IconProp}
      />
    </Styled.Icon>
  );
};

export default Icon;
