import React from "react";

import { classJoin } from "../../../utils/common";

import classes from './Button.module.css';

interface ButtonProps {
    children?: React.ReactNode;
    primary?: boolean;
    background?: string;
    size?: 'small' | 'medium' | 'large';
    onClick?:() => void;
}

const Button = ({
    primary = false,
    size = 'medium',
    background,
    ...props
}: ButtonProps) => {
    const buttonMode = primary ? classes.button_primary : classes.button_secondary;
    const buttonSize = size === 'large' ? classes.button_large : size==='small' ? classes.button_small : classes.button_medium;

    return (
        <button 
            className={classJoin(classes.button, buttonSize, buttonMode)} 
            style={background ? {'background': background} : undefined}
            onClick={props.onClick}
            {...props}
        >
            {props.children}
        </button>
     )
};

export default Button;