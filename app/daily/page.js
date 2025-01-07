import { connectDB } from "@/util/database";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import CalenderCell from "./calenderCell";
import classes from "./page.module.css";
import NotAuth from "../notauth";

import { format } from "date-fns";

export default async function Daily() {
  let session = await getServerSession(authOptions);
  if (session === null) {
    return NotAuth();
  }
  const currentMonth = new Date();
  const date = ["Sun", "Mon", "Thu", "Wed", "Thrs", "Fri", "Sat"];
  const year = currentMonth.getFullYear();
  const Month = currentMonth.getMonth() + 1;

  const client = await connectDB;
  const db = client.db("menber");

  let result = await db
    .collection("daliy")
    .find({
      email: session.user.email,
      year: `${year}`,
      month: `${Month}`,
    })
    .toArray();

  result = result.map((a) => {
    a._id = a._id.toString();
    return a;
  });
  return (
    <div className={classes.body}>
      <div className={classes.header}>
        <span>
          {format(currentMonth, "yyy")}년 - {format(currentMonth, "M")}월
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
        checkDate={result}
      />
    </div>
  );
}
