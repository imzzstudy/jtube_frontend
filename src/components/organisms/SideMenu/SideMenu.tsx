import Avatar from "components/atoms/Avatar/Avatar";
import Icon from "components/atoms/Icon/Icon";

import classes from "./SideMenu.module.css";

const SideMenu = () => {
    return (
        <div className={classes.sidemenu_wrap}>
            <ul className={classes.sidemenu_lists}>
                <li>
                    <Icon>home</Icon>
                    <span className={classes.text}>홈</span>
                </li>
                <li>
                    <Icon>home</Icon>
                    <span className={classes.text}>홈</span>
                </li>
                <li>
                    <Icon>home</Icon>
                    <span className={classes.text}>홈</span>
                </li>
            </ul>
            <ul className={classes.subscription}>
                <div style={{"paddingLeft":"10px"}}>
                    <h3>구독</h3>
                </div>
                <li>
                    <Avatar size="32px"/>
                    <span className={classes.text}>홈</span>
                </li>
                <li>
                    <Avatar size="32px"/>
                    <span className={classes.text}>홈</span>
                </li>
                <li>
                    <Avatar size="32px"/>
                    <span className={classes.text}>홈</span>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu