import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import { connectDB } from "@/util/database";

import Imgform from "./imgform";
import NotAuth from "../notauth";
import Imgslide from "./imgslide";
import classes from "./page.module.css";

export default async function Body() {
  let session = await getServerSession(authOptions);
  if (session === null) {
    return NotAuth();
  }
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const client = await connectDB;
  const db = client.db("menber");

  let result = await db.collection("front").findOne({
    year: `${year}`,
    month: `${month}`,
  });

  let fronts = await db
    .collection("front")
    .find({
      email: session.user.email,
    })
    .toArray();
  fronts = fronts.map((a) => {
    a._id = a._id.toString();
    return a;
  });
  let sides = await db
    .collection("side")
    .find({
      email: session.user.email,
    })
    .toArray();
  sides = sides.map((a) => {
    a._id = a._id.toString();
    return a;
  });
  return (
    <div className={classes.main}>
      {result != null ? (
        <div className={classes.message}>이번달 입력완료</div>
      ) : (
        <Imgform year={year} month={month} session={session} />
      )}
      <Imgslide front={fronts} side={sides} />
    </div>
  );
}
