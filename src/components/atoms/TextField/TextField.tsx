import React from "react";
import classes from "./index.module.css";

interface InputProps {
  children?: React.ReactNode;
  id: string;
  type?: string;
  text?: string;
  name?: string;
  value?: string;
  sx?: object;
  onChange?: (newValue: string) => void;
}

const TextField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, type = "text", value = "", ...props }: InputProps, ref) => {
    const InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      props.onChange && props.onChange(newValue);
    };

    return (
      <div style={{ display: "inline-block", ...props.sx }}>
        <div className={classes.input_wrap}>
          <input
            ref={ref}
            id={id}
            type={type}
            required
            value={value}
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
