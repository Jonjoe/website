import * as React from "react";
import { constants } from "config";

import { Icon } from "components";

const SocialLinks: React.FC = () => {
  const iconSize = "1.4rem";

  return (
    <React.Fragment>
      <a target="blank" href={constants.links.DRIBBBLE}>
        <Icon name="dribbble" size={iconSize} />
      </a>

      <a target="blank" href={constants.links.TWITTER}>
        <Icon name="twitter" size={iconSize} />
      </a>

      <a target="blank" href={constants.links.GITHUB}>
        <Icon name="github" size={iconSize} />
      </a>

      <a target="blank" href={constants.links.LINKEDIN}>
        <Icon name="linkedin" size={iconSize} />
      </a>
    </React.Fragment>
  );
};

export default SocialLinks;
