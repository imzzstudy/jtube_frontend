// import React from "react";

// const Subtitle:React.FC<{children?:React.ReactNode}> = (props) => {
//     return <h2>{props.children}</h2>
// }

// export default Subtitle;

import React from "react";

// import { classJoin } from "../../utils/common";

// import classes from './Subtitle.module.css';

interface SubtitleProps {
    children?: React.ReactNode;
}

const Subtitle = ({
    ...props
}: SubtitleProps) => {
    return <h2>{props.children}</h2>
};

export default Subtitle;