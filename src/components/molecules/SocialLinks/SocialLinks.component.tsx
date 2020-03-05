import * as React from "react";

import { Icon } from "components";

const SocialLinks: React.FC = () => {
  const iconSize = "1.4rem";

  return (
    <React.Fragment>
      <a href="https://dribbble.com/jonjoe">
        <Icon name="dribbble" size={iconSize} />
      </a>
      <a href="https://twitter.com/_jonjoe">
        <Icon name="twitter" size={iconSize} />
      </a>
      <a href="https://github.com/jonjoe">
        <Icon name="github" size={iconSize} />
      </a>
      <a href="https://linkedin.com/in/jonjoe">
        <Icon name="linkedin" size={iconSize} />
      </a>
    </React.Fragment>
  );
};

export default SocialLinks;
