import React from "react";
import TextField from "./TextField";

export default {
  title: "atoms/TextField",
};

export const Default: React.FC = () => (
  <TextField name="man" value="man"></TextField>
);

export const Secondary: React.FC = () => (
  <TextField name="woman" value="woman"></TextField>
);
