import React from "react";

interface Props {
  children?: React.ReactElement | string;
  value?: string;
  name?: string;
  disabled?: boolean;
}

function Radio({ children, value, name, disabled }: Props) {
  return (
    <label>
      <input type="radio" value={value} name={name} disabled={disabled} />
      {children}
    </label>
  );
}

export default Radio;
