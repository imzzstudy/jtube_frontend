import React from "react";

interface Props {
    children?: React.ReactElement | string;
}

function Example({children}: Props) {
    return <button>{children}</button>
}

export default Example;