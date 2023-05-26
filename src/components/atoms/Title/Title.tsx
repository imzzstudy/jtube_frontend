import React from "react";

// import { classJoin } from "../../utils/common";

// import classes from './Title.module.css';

interface TitleProps {
    children?: React.ReactNode;
    bold?: boolean;
    size?: string;
    color?: string;
}

const Title = ({
    bold = false,
    size = '16px',
    color = '#000000',
    ...props
}: TitleProps) => {
    const style = {
        'font-weight': bold ? 'bold': 'none',
        'font-size': size,
        'color': color 
    };
    return <p style={style}>{props.children}</p>
};

export default Title;