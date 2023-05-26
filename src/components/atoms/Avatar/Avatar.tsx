import React from "react";

import { FiUser } from "react-icons/fi";
// import { classJoin } from "../../utils/common";

import classes from './Avatar.module.css';

interface AvatarProps {
    children?: React.ReactNode;
    src: string;
    alt?: string;
}

const Avatar = ({
    ...props
}: AvatarProps) => {
    return (
        <div className={classes.avatar}>
            {
                props.src ? 
                    <img 
                        className={classes.avatar_image} 
                        alt={props.alt} 
                        src={props.src}
                    /> 
                    : <FiUser size="24px" color="white"></FiUser>
            }
        </div>
     )
};

export default Avatar;