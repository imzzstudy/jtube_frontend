import React from "react";

interface Props {
  children?: React.ReactElement | string;
  value?: string;
  name?: string;
  disabled?: boolean;
}

function Icon({ children, value, name, disabled }: Props) {
  return <span className="material-icons">{children}</span>;
}

export default Icon;
