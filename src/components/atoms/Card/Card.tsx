import React from "react";

import { classJoin } from "../../../utils/common";

import classes from "./Card.module.css";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  sx?: object;
}

const Card = ({ ...props }: CardProps) => {
  return (
    <div className={classJoin(classes.card, props.className)} style={props.sx}>
      {props.children}
    </div>
  );
};

export default Card;
