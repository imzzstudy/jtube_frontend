import React from "react";
import styles from "./index.css";
interface Props {
  children?: React.ReactElement | string;
  value?: string;
  name?: string;
  disabled?: boolean;
}

function TextField({ children, value, name, disabled }: Props) {
  return (
    <label className={[styles.container1, styles.container2].join(" ")}>
      <input type="text" value={value} name={name} disabled={disabled} />
      {children}
    </label>
  );
}

export default TextField;
