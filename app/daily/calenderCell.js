"use client";

import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { format } from "date-fns";
import { addDays } from "date-fns";
import classes from "./calenderCell.module.css";
import { useState } from "react";

import Modal from "./Modal";

export default function CalenderCell({ currentMonth, session, checkDate }) {
  const [modal, setModal] = useState(false);
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const currentDay = format(currentMonth, "d");
  const currMonth = format(currentMonth, "M");

  let cheacklistmonth = [];
  checkDate.map((date) => {
    if (date.month === format(startDate, "M")) {
      if (date.date >= format(startDate, "d")) {
        cheacklistmonth.push(date.month);
      }
    } else {
      cheacklistmonth.push(date.month);
    }
  });

  let cheacklistdate = [];
  checkDate.map((date) => {
    if (date.month === format(startDate, "M")) {
      if (date.date >= format(startDate, "d")) {
        cheacklistdate.push(date.date);
      }
    } else {
      cheacklistdate.push(date.date);
    }
  });

  const showModal = () => {
    setModal(true);
  };

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";
  let formattedMonth = "";

  function classCheck(formattedMonth, formattedDate) {
    let romveMonth = cheacklistmonth.indexOf(formattedMonth);
    let romveDate = cheacklistdate.indexOf(formattedDate);
    cheacklistmonth.splice(romveMonth, 1);
    cheacklistdate.splice(romveDate, 1);
    return classes.check;
  }

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      formattedMonth = format(day, "M");

      days.push(
        <div
          className={`${classes.cell}  ${
            formattedDate === currentDay && formattedMonth === currMonth
              ? classes.currentDay
              : formattedMonth != currMonth
              ? classes.prevMonth
              : ""
          }`}
          onClick={
            formattedDate === currentDay &&
            formattedMonth === currMonth &&
            cheacklistdate.includes(currentDay) === false
              ? showModal
              : null
          }
          key={day}
        >
          <span
            className={`${classes.cellspan} ${
              cheacklistmonth.includes(formattedMonth) &&
              cheacklistdate.includes(formattedDate)
                ? classCheck(formattedMonth, formattedDate)
                : ""
            } `}
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
      {modal && <Modal session={session} setModal={setModal} />}
    </div>
  );
}
