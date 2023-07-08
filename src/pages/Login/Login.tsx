import Card from "components/atoms/Card/Card";
import { useRef } from "react";
import classes from "./style.module.css";
import logo from "../../images/logo.png";
import Image from "components/atoms/Image/Image";
import Link from "components/atoms/Link/Link";
import TextField from "components/atoms/TextField/TextField";
import Button from "components/atoms/Button/Button";

export const Login = () => {
  const id = useRef<HTMLInputElement>(null);
  const pw = useRef<HTMLInputElement>(null);
  const idChangeHandler = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <header className={classes.header}>
        <Link href="/">
          <Image src={logo} className={classes.logo} />
        </Link>
      </header>
      <Card sx={{ width: "460px", margin: "0 auto", padding: "20px 28px" }}>
        <TextField
          sx={{ width: "100%" }}
          text="아이디"
          ref={id}
          onChange={idChangeHandler}
        ></TextField>
        <TextField
          sx={{ width: "100%" }}
          type="password"
          text="비밀번호"
          ref={pw}
        ></TextField>
        <Button sx={{ width: "100%" }} color="primary">
          로그인
        </Button>
      </Card>
    </div>
  );
};
