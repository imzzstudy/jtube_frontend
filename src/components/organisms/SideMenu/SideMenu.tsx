// import Avatar from "components/atoms/Avatar/Avatar";
// import Icon from "components/atoms/Icon/Icon";

import { Link } from "react-router-dom";
import { SubscriptionLists } from "../SubscriptionLists/SubscriptionLists";
import classes from "./SideMenu.module.css";
import { Lists, List } from "components/molecules/Lists";

interface SideMenuProps {
    children?:React.ReactNode
    style?:Object
}


const SideMenu = ({...props}:SideMenuProps) => {
    const onClickHandler = () => {
        console.log(123)
    }
    return (
        <div 
            style={props.style}
            className={classes.sidemenu_wrap}
        >
            <Lists>
                <Link
                    to="/"
                    style={{
                        textDecoration:"none",
                        color:"black"
                    }}
                >
                    <List
                        icon="home"
                        className={classes.sidemenu_list}
                        onClick={onClickHandler}
                    >
                        홈
                    </List>
                </Link>
                <Link
                    to="/subscriptions"
                    style={{
                        textDecoration:"none",
                        color:"black"
                    }}
                >
                    <List
                        icon="subscriptions"
                        className={classes.sidemenu_list}
                    >
                        구독
                    </List>
                </Link>
            </Lists>
            <SubscriptionLists/>
        </div>
    )
}

export default SideMenu