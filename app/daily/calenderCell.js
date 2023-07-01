"use client";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { format } from "date-fns";
import { addDays } from "date-fns";
import classes from "./calenderCell.module.css";
import { useState } from "react";
import Modal from "./Modal";

export default function CalenderCell({ currentMonth }) {
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
<<<<<<< HEAD
=======
  console.log(modal);
>>>>>>> 1cd9f28e26e58410f1fc90386f8528497a20d88e
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
<<<<<<< HEAD
      {modal && <Modal setModal={setModal} />}
=======
      {modal && <Modal />}
>>>>>>> 1cd9f28e26e58410f1fc90386f8528497a20d88e
    </div>
  );
}
