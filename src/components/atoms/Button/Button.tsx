import React from "react";

import { classJoin } from "../../../utils/common";

import classes from "./Button.module.css";

interface ButtonProps {
  children?: React.ReactNode;
  color?: string;
  background?: string;
  size?: "small" | "medium" | "large";
  sx?: object;
  onClick?: () => void;
}

const Button = ({
  color = "primary",
  size = "medium",
  ...props
}: ButtonProps) => {
  const buttonMode =
    color === "primary" ? classes.button_primary : classes.button_secondary;
  const buttonSize =
    size === "large"
      ? classes.button_large
      : size === "small"
      ? classes.button_small
      : classes.button_medium;

  return (
    <button
      className={classJoin(classes.button, buttonSize, buttonMode)}
      style={props.sx}
      onClick={props.onClick}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
