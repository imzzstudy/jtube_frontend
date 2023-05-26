import React from "react";

const Link:React.FC<{children?:React.ReactNode; href:string}> = (props) => {
    return <a href={props.href}>{props.children}</a>
}

export default Link;