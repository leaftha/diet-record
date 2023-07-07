"use client";
import { signIn } from "next-auth/react";

import classes from "./loginbtn.module.css";

export default function LoginBtn() {
  return (
    <button
      className={classes.btn}
      onClick={() => {
        signIn();
      }}
    >
      로그인버튼
    </button>
  );
}
