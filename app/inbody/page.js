import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import { connectDB } from "@/util/database";
import LineChart from "./LineChart";
import NotAuth from "../notauth";
import classes from "./page.module.css";
import InputForm from "./inputform";

export default async function InBody() {
  const session = await getServerSession(authOptions);
  if (!session) return NotAuth();

  const client = await connectDB;
  const db = client.db("menber");

  const rawResults = await db
    .collection("inbody")
    .find({ email: session.user.email })
    .sort({ _id: -1 })
    .limit(12)
    .toArray();

  if (rawResults.length === 0) {
  }

  const latestWeight = rawResults[0]?.weight ?? 0;
  const targetWeight = session.user?.weight ?? 0;
  const countWeight = latestWeight - targetWeight;

  const chronologicalData = [...rawResults].reverse();

  const chartData = chronologicalData.reduce(
    (acc, cur) => {
      acc.labels.push(`${cur.year}-${cur.month}`);
      acc.weight.push(cur.weight);
      acc.fat.push(cur.fat);
      acc.muscle.push(cur.mucle);
      acc.fatper.push(cur.fatper);
      return acc;
    },
    { labels: [], weight: [], fat: [], muscle: [], fatper: [] },
  );

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;

  const isAlreadyInputThisMonth =
    rawResults.length > 0 &&
    rawResults[0].year === currentYear &&
    rawResults[0].month === currentMonth;

  return (
    <div className={classes.main}>
      <div className={classes.itemGoal}>
        <p>
          목표까지 남은 체중:{" "}
          {typeof countWeight === "number" ? countWeight.toFixed(2) : "--"} kg
        </p>
      </div>

      <div className={classes.itemInput}>
        <h1>체중입력</h1>
        {!isAlreadyInputThisMonth ? (
          <InputForm
            session={session}
            month={currentMonth}
            year={currentYear}
          />
        ) : (
          <div className={classes.message}>
            <h1>이번달 입력 완료</h1>
          </div>
        )}
      </div>

      <div className={classes.itemChart}>
        <LineChart
          label={chartData.labels}
          weight={chartData.weight}
          fat={chartData.fat}
          muscle={chartData.muscle}
          fatper={chartData.fatper}
        />
      </div>
    </div>
  );
}
