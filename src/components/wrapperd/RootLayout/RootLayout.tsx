// import { Outlet, useNavigation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import MainHeader from "components/organisms/MainHeader/MainHeader";
import SideMenu from "components/organisms/SideMenu/SideMenu";

import classes from "./RootLayout.module.css";

const RootLayout = () => {
    return (
        <>
            {/* <MainNavigation/> */} 
            <MainHeader/>
            <div className={classes.main_wrap}>
                <SideMenu/>
                <main className={classes.main_contents}>
                    {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                    <Outlet/>
                </main>
            </div>
        </>
        
    )
};

export default RootLayout;