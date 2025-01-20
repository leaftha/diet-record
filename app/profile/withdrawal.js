"use client";

import Modal from "./modal";
import classes from "./withdrawal.module.css";
import { useState } from "react";

export default function Widhdrawal({ session }) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <p
        onClick={() => {
          setModal(true);
        }}
        className={classes.btn}
      >
        회원탈퇴
      </p>
      {modal && <Modal session={session} setModal={setModal} />}
    </>
  );
}
