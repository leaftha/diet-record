import { format } from "date-fns";
import CalenderCell from "./calenderCell";
import classes from "./calender.module.css";

export default function Calender({ record, session }) {
  const currentMonth = new Date();
  const date = ["Sun", "Mon", "Thu", "Wed", "Thrs", "Fri", "Sat"];

  return (
    <div>
      <div className={classes.header}>
        <span>
          {format(currentMonth, "yyy")}년
          <span> {format(currentMonth, "M")}월</span>
        </span>
      </div>
      <div className={classes.days}>
        {date.map((date, idx) => {
          return (
            <div className={classes.day} key={idx}>
              {date}
            </div>
          );
        })}
      </div>
      <CalenderCell
        session={session}
        currentMonth={currentMonth}
        checkDate={record}
      />
    </div>
  );
}
