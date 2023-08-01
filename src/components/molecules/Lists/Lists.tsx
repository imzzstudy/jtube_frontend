import React from "react";

import classes from "./Lists.module.css";
import { classJoin } from "../../../utils/common";

interface ListsProps {
    children?:React.ReactNode
    className?: string
};

export const Lists = ({
    ...props
}:ListsProps) => {
    return <ul className={classJoin(props.className, classes.lists_wrap)}>
        {props.children}
    </ul>
};