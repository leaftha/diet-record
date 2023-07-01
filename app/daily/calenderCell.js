"use client";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { format } from "date-fns";
import { addDays } from "date-fns";
import classes from "./calenderCell.module.css";

export default function CalenderCell({ currentMonth }) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const cloneDay = day;
      days.push(
        <div className={classes.cell} key={day}>
          <span
            className={
              format(currentMonth, "M") !== format(day, "M")
                ? "text not-valid"
                : ""
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
  return <div className={classes.body}>{rows}</div>;
}
