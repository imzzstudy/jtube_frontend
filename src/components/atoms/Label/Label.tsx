// import React from "react";

// const Label:React.FC<{children?:React.ReactNode; htmlFor:string}> = (props) => {
//     return <label {...props}>
//         {props.children}
//     </label>
// }

// export default Label;

import React from "react";

// import { classJoin } from "../../utils/common";
// import classes from './Label.module.css';

interface LabelProps {
    children?: React.ReactNode;
    htmlFor:string;
}

const Label = ({
    ...props
}: LabelProps) => {
    return (
        <label {...props}>
            {props.children}
        </label>
     )
};

export default Label;