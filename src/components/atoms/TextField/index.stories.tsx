import React from "react";
import TextField from "./TextField";

export default {
  title: "atoms/TextField",
};

export const Default: React.FC = () => (
  <TextField id="man" name="man" value="man"></TextField>
);

export const Secondary: React.FC = () => (
  <TextField id="woman" name="woman" value="woman"></TextField>
);
