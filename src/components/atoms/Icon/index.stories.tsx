import React from "react";
import Icon from "./Icon";

export default {
  title: "atoms/Icon",
};

export const Default: React.FC = () => (
  <Icon name="man" value="man">
    home
  </Icon>
);

export const Secondary: React.FC = () => (
  <Icon name="woman" value="woman">
    home
  </Icon>
);
