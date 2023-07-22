import React from "react";
import Tab from "./Tab";

export default {
  title: "molecules/Tab",
};

export const Default: React.FC = () => (
  <Tab name="man" value="man">
    남
  </Tab>
);

export const Secondary: React.FC = () => (
  <Tab name="woman" value="woman">
    여
  </Tab>
);
