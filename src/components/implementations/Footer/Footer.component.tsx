import * as React from "react";
import { Text, Icon } from "components";
import { theme } from "config";

const Footer: React.FC = () => (
  <footer>
    <Text.Inline align="center">
      Made with <Icon name="heart" color={theme.pallet.RED} size="1rem" /> by{" "}
      <strong>me</strong> ... duhh
    </Text.Inline>

    <Text.Inline align="center">
      <Icon name="copyright" size="0.8rem" />
      Copyright 1969
    </Text.Inline>
  </footer>
);

export default Footer;
