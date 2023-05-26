import React from "react";
import Radio from "./Radio";

export default {
  title: "atoms/Radio",
};

export const Default: React.FC = () => (
  <Radio name="man" value="man">
    남
  </Radio>
);

export const Secondary: React.FC = () => (
  <Radio name="woman" value="woman">
    여
  </Radio>
);
