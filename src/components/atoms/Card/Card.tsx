import React from "react";

import { classJoin } from "../../../utils/common";

import classes from './Card.module.css';

interface CardProps {
    children?: React.ReactNode;
}

const Card = ({...props}: CardProps) => {
    return (
        <div className={classJoin(classes.card)}>
            {props.children}
        </div>
     )
};

export default Card;