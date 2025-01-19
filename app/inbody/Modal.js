"use client";

import { useState } from "react";
import InputForm from "./inputform";
import classes from "./Modal.module.css";

const Modal = ({ session }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={classes.body}>
      <button
        className={classes.btn}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        체중 입력
      </button>
      {isModalOpen && (
        <ModalContent session={session} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};

const ModalContent = ({ session, setIsModalOpen }) => {
  return (
    <div
      className={classes.modal}
      onClick={() => {
        setIsModalOpen(false);
      }}
    >
      <InputForm session={session} />
    </div>
  );
};

export default Modal;
