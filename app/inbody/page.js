import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import { connectDB } from "@/util/database";
import LineChart from "./LineChart";
import NotAuth from "../notauth";
import classes from "./page.module.css";
import Modal from "./Modal";

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

  let userData = await db
    .collection("user_cred")
    .find({ email: session.user.email })
    .sort({ _id: -1 })
    .limit(12)
    .toArray();
  console.log(userData);

  result = result.map((a) => {
    a._id = a._id.toString();
    return a;
  });
  let datelabels = result.map((data) => {
    return `${data.year}-${data.month}`;
  });
  let weightData = [];
  let fatData = [];
  let muscleData = [];
  let fatperData = [];

  result.forEach((data) => {
    weightData.push(data.weight);
    fatData.push(data.fat);
    muscleData.push(data.muscle);
    fatperData.push(data.fatper);
  });

  let countWeight = 0;
  let lastMonthSubmit = 0;
  if (result.length > 0) {
    lastMonthSubmit = [(result[0].year, result[0].month)];
    countWeight = weightData[0] - userData[0].weight;
    // console.log(weightData, session.user);
  }

  // console.log(countWeight, lastMonthSubmit);

  return (
    <div className={classes.main}>
      <div className={classes.itemGoal}>
        <p>
          목표까지 남은 체중 :
          {countWeight.toFixed(2) ? countWeight.toFixed(2) : `--`}
        </p>
        <Modal lastMonthSubmit={lastMonthSubmit} session={session} />
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
