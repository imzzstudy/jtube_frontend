import React from "react";

interface Props {
  children?: React.ReactElement | string;
  value?: string;
  name?: string;
  disabled?: boolean;
}

function Tab({ children, value, name, disabled }: Props) {
  return <button>{children}</button>;
}

export default Tab;
