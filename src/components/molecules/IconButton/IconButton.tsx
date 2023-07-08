import React from "react"

import Icon from "components/atoms/Icon/Icon";

import classes from "./IconButton.module.css";

interface IconButtonProps{
    children?: React.ReactNode;
    icon: string;
    text?: string;
    width?: string
    onClick?: () => void;
}

const IconButton:React.FC<IconButtonProps> = ({...props}) => {
    return <div>
        <button className={classes.icon_button} style={{"width":props.width,"height":props.width}} onClick={props.onClick}>
            <Icon>{props.icon}</Icon>
            { props.text ? <p>{props.text}</p> : <></> }
        </button>
    </div>   
}

export default IconButton