import React, { useState } from "react";
import classes from "./index.module.css";

interface InputProps {
  children?: React.ReactNode;
  type?: string;
  text?: string;
  name?: string;
  value?: string;
  sx?: object;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", ...props }: InputProps, ref) => {
    const [enteredInput, setEnteredInput] = useState("");
    const InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEnteredInput(e.target.value);
      props.onChange && props.onChange(e);
    };

    return (
      <div style={{ display: "inline-block", ...props.sx }}>
        <div className={classes.input_wrap}>
          <input
            ref={ref}
            type={type}
            required
            value={enteredInput}
            onChange={InputChangeHandler}
            name={props.name}
          />
          <label>{props.text}</label>
        </div>
      </div>
    );
  }
);

export default TextField;
