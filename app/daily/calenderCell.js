"use client";

import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { format } from "date-fns";
import { addDays } from "date-fns";
import classes from "./calenderCell.module.css";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";

import Modal from "./Modal";

export default function CalenderCell({ currentMonth, checkDate }) {
  const [modal, setModal] = useState(false);
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const currentDay = format(currentMonth, "d");
  const currMonth = format(currentMonth, "M");

  const showModal = () => {
    setModal(true);
  };

  const closeModel = () => {
    setModal(false);
  };
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";
  let formattedMonth = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      formattedMonth = format(day, "M");
      days.push(
        <div className={classes.cell} key={day}>
          <span
            className={
              formattedDate === currentDay && formattedMonth === currMonth
                ? classes.currentDay
                : formattedMonth != currMonth
                ? classes.prevMonth
                : ""
            }
            onClick={
              formattedDate === currentDay && formattedMonth === currMonth
                ? showModal
                : null
            }
          >
            {formattedDate}
          </span>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className={classes.row} key={day}>
        {days}
      </div>
    );
    days = [];
  }
  return (
    <div className={classes.body}>
      {rows}
      <SessionProvider>
        {modal && <Modal setModal={setModal} />}
      </SessionProvider>
    </div>
  );
}
