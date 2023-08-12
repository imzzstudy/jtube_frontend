import Card from "components/atoms/Card/Card";
import { useEffect, useState } from "react";
import classes from "./style.module.css";
import logo from "../../images/logo.png";
import Image from "components/atoms/Image/Image";

import TextField from "components/atoms/TextField/TextField";
import Button from "components/atoms/Button/Button";
import { Form, Link, json, redirect, useSearchParams } from "react-router-dom";
import { joinUser, loginUser } from "api/auth";
const CryptoJS = require("crypto-js");

const Authentication = () => {
  const [searchParams] = useSearchParams();

  const isLogin = searchParams.get("mode") === "login";
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleIdChange = (newValue: string) => {
    setId(newValue);
  };
  const handlePwChange = (newValue: string) => {
    setPw(newValue);
  };

  useEffect(() => {
    setId("");
    setPw("");
  }, [searchParams]);

  return (
    <div>
      <header className={classes.header}>
        <Link to='/'>
          <Image src={logo} className={classes.logo} />
        </Link>
        <div className={classes.headerMessage}>
          {isLogin ? "회원이 아니신가요?" : "이미 회원이신가요?"}
          <Link to={`?mode=${isLogin ? "join" : "login"}`}>
            {isLogin ? "회원가입 하기" : "로그인 하기"}
          </Link>
        </div>
      </header>
      <Form method='post'>
        <Card sx={{ width: "460px", margin: "0 auto", padding: "20px 28px" }}>
          <TextField
            sx={{ width: "100%" }}
            text='아이디'
            id='id'
            name='id'
            value={id}
            onChange={handleIdChange}
          ></TextField>
          <TextField
            sx={{ width: "100%" }}
            type='password'
            id='password'
            name='password'
            text='비밀번호'
            value={pw}
            onChange={handlePwChange}
          ></TextField>

          <Button sx={{ width: "100%" }} color='primary'>
            {isLogin ? "로그인" : "회원가입"}
          </Button>
        </Card>
      </Form>
    </div>
  );
};

export default Authentication;

export async function action({ request }: { request: Request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "join") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  const user = await request.formData();
  const passwordValue = user.get("password");
  if (typeof passwordValue === "string") {
    const hashedPassword = CryptoJS.SHA256(passwordValue).toString(
      CryptoJS.enc.Hex
    );

    try {
      let requestMethod;
      if (mode === "login") {
        requestMethod = loginUser;
      } else {
        requestMethod = joinUser;
      }
      const { data } = await requestMethod({
        id: user.get("id"),
        pw: hashedPassword,
      });
      if (data) {
        if (mode === "join") {
          return redirect("/auth?mode=login");
        }
        return redirect("/");
      }
    } catch (err: unknown) {
      if (err instanceof CustomError_Class) {
        alert(err.response?.data?.data?.message);
      }
    }
  } else {
    alert("비밀번호 비어있음");
  }

  return null;
}
