import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import { connectDB } from "@/util/database";
import LineChart from "./LineChart";
import NotAuth from "../notauth";
import classes from "./page.module.css";
import InputForm from "./inputform";

export default async function InBody() {
  let session = await getServerSession(authOptions);
  if (session === null) {
    return NotAuth();
  }
  const client = await connectDB;
  const db = client.db("menber");

  let result = await db
    .collection("inbody")
    .find({ email: session.user.email })
    .sort({ _id: -1 })
    .limit(12)
    .toArray();

  result = result.map((a) => {
    a._id = a._id.toString();
    return a;
  });
  // console.log(result);

  let datelabels = result.map((data) => {
    return `${data.year}-${data.month}`;
  });

  // console.log(datelabels);

  let weightData = result.map((data) => {
    return data.weight;
  });
  // console.log(weightData.reverse());

  let fatData = result.map((data) => {
    return data.fat;
  });

  let muscleData = result.map((data) => {
    return data.mucle;
  });

  let fatperData = result.map((data) => {
    return data.fatper;
  });

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const countWeight = weightData[0] - session.user.weight;

  return (
    <div className={classes.main}>
      <div className={classes.itemGoal}>
        <p>목표까지 남은 체중 {countWeight.toFixed(2) && `--`}</p>
      </div>

      <div className={classes.itemInput}>
        <h1>체중입력</h1>
        {result.length === 0 || result[0].month != month ? (
          <InputForm session={session} month={month} year={year} />
        ) : (
          <div className={classes.message}>
            <h1>이번달 입력 완료</h1>
          </div>
        )}
      </div>
      <div className={classes.itemChart}>
        <LineChart
          label={datelabels.reverse()}
          weight={weightData.reverse()}
          fat={fatData.reverse()}
          muscle={muscleData.reverse()}
          fatper={fatperData.reverse()}
        />
      </div>
    </div>
  );
}
