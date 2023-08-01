import Avatar from "components/atoms/Avatar/Avatar";
import Icon from "components/atoms/Icon/Icon";

import classes from "./List.module.css";

import React from "react";
import { classJoin } from "utils/common";

interface ListProps {
    children?:React.ReactNode;
    key?:string;
    className?:string;
    avatar?:string;
    icon?:string;
    subtitle?:string;
    onClick?:() => void;
};

export const List = ({
    ...props
}: ListProps) => {
    if( props.avatar && props.icon ) throw "Select one thing";

    return <li 
        key={props.key}
        className={classJoin(props.className,classes.list_wrap)}
        onClick={props.onClick}
    >
        {
            props.avatar ? <Avatar size="32px"/> : props.icon ? <Icon>{props.icon}</Icon> : <></>
        }
        <div className={classes.title_wrap}>
            <p className={classes.title}>{ props.children }</p>
            {
                props.subtitle ? <span className={classes.subtitle}>{props.subtitle}</span> : <></>
            }
        </div>
    </li>
};