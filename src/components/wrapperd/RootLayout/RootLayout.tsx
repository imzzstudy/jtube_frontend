// import { Outlet, useNavigation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import MainHeader from "components/organisms/MainHeader/MainHeader";
import SideMenu from "components/organisms/SideMenu/SideMenu";

import classes from "./RootLayout.module.css";
import { useState } from "react";

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const sideMenuToggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* <MainNavigation/> */}
      <MainHeader onToggle={sideMenuToggleHandler} />
      <div className={classes.main_wrap}>
        <SideMenu style={{ display: isOpen ? "block" : "none" }} />
        <main className={classes.main_contents}>
          {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
