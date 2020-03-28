import * as React from "react";
import { social } from "app-constants";

import { Icon } from "components";

const SocialLinks: React.FC = () => {
  const iconSize = "1.4rem";

  return (
    <React.Fragment>
      <a target="blank" href={social.DRIBBBLE}>
        <Icon name="dribbble" size={iconSize} />
      </a>

      <a target="blank" href={social.TWITTER}>
        <Icon name="twitter" size={iconSize} />
      </a>

      <a target="blank" href={social.GITHUB}>
        <Icon name="github" size={iconSize} />
      </a>

      <a target="blank" href={social.LINKEDIN}>
        <Icon name="linkedin" size={iconSize} />
      </a>
    </React.Fragment>
  );
};

export default SocialLinks;
