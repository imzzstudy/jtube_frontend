import React from "react";

// import { classJoin } from "../../../utils/common";

import classes from './Input.module.css';

interface InputProps {
    children?: React.ReactNode;
    type:string;
    text?:string;
}

const Input = ({...props}: InputProps) => {
    return (
        <div style={{"display":"inline-block"}}>
            <div className={classes.input_wrap}>
                <input
                    type={props.type}
                    required
                />
                <label>{props.text}</label>
            </div>
        </div>
    )
}

export default Input;