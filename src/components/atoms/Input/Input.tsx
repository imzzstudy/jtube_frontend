import React from "react";

// import { classJoin } from "../../../utils/common";

import classes from "./Input.module.css";
// export const Input = React.forwardRef((props, ref) => {
//     return (
//       <div className={classes.input}>
//         <label htmlFor={props.input.id}>{props.label}</label>
//         <input ref={ref} id={props.input.id} {...props.input} />
//       </div>
//     );
//   });

interface InputProps {
  children?: React.ReactNode;
  type: string;
  text?: string;
}
// /{ ...props }: InputProps
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }: InputProps, ref) => {
    return (
      <div style={{ display: "inline-block" }}>
        <div className={classes.input_wrap}>
          <input type={props.type} required ref={ref} />
          <label>{props.text}</label>
        </div>
      </div>
    );
  }
);

export default Input;
