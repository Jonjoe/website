import * as React from "react";
import { constants } from "config";

import { Icon } from "components";

const SocialLinks: React.FC = () => {
  const iconSize = "1.4rem";

  return (
    <React.Fragment>
      <a target="blank" href={constants.socialLinks.DRIBBBLE}>
        <Icon name="dribbble" size={iconSize} />
      </a>

      <a target="blank" href={constants.socialLinks.TWITTER}>
        <Icon name="twitter" size={iconSize} />
      </a>

      <a target="blank" href={constants.socialLinks.GITHUB}>
        <Icon name="github" size={iconSize} />
      </a>

      <a target="blank" href={constants.socialLinks.LINKEDIN}>
        <Icon name="linkedin" size={iconSize} />
      </a>
    </React.Fragment>
  );
};

export default SocialLinks;
