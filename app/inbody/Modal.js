"use client";

import { useEffect, useState } from "react";
import InputForm from "./inputform";
import classes from "./Modal.module.css";

const Modal = ({ session, lastMonthSubmit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Corrected the typo here
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    if (
      `${currentYear}` === lastMonthSubmit[0] &&
      `${currentMonth + 1}` === lastMonthSubmit[1]
    ) {
      setIsSubmit(true);
    }
  }, [lastMonthSubmit]);

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
        <ModalContent
          session={session}
          setIsModalOpen={setIsModalOpen}
          isSubmit={isSubmit}
        />
      )}{" "}
      {/* Corrected the typo here */}
    </div>
  );
};

const ModalContent = ({ session, setIsModalOpen, isSubmit }) => {
  // Corrected the typo here
  return (
    <div
      className={classes.modal}
      onClick={() => {
        setIsModalOpen(false);
      }}
    >
      <InputForm session={session} isSubmit={isSubmit} />
    </div>
  );
};

export default Modal;
