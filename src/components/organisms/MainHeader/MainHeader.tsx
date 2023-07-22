import IconButton from "components/molecules/IconButton/IconButton";
import Image from "components/atoms/Image/Image";
import Input from "components/atoms/Input/Input";
import Avatar from "components/atoms/Avatar/Avatar";
import img from "../../../images/logo.png";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <div className={classes.header_wrap}>
      <div className={classes.start}>
        <IconButton icon="menu" />
        <div style={{ padding: "12px" }}>
          <Image src={img} width={"127px"} height={"40px"}/>
        </div>
      </div>
      <div className={classes.center}>
        <div style={{ padding: "12px" }}>
          <Input type="text" />
        </div>
        <IconButton icon="search" />
      </div>
      <div className={classes.end}>
        <IconButton icon="notifications" />
        <div style={{ padding: "12px" }}>
          <Avatar size="32px" />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
