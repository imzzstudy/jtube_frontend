import React from "react";
import CheckBox from "./CheckBox";

export default {
  title: "atoms/CheckBox",
};

export const Default: React.FC = () => (
  <CheckBox name="man" value="man">
    남
  </CheckBox>
);

export const Secondary: React.FC = () => (
  <CheckBox name="woman" value="woman">
    여
  </CheckBox>
);
