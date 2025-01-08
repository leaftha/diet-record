import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import { connectDB } from "@/util/database";
import NotAuth from "../notauth";
import SetupForm from "./SetupForm";
import classes from "./page.module.css";

export default async function InBody() {
  let session = await getServerSession(authOptions);
  if (!session) {
    return NotAuth();
  }
  const client = await connectDB;
  const db = client.db("menber");

  let result = await db
    .collection("user_cred")
    .find({ email: session.user.email })
    .sort({ _id: -1 })
    .limit(12)
    .toArray();

  let currentWeight = result[0].weight;
  let currentInbody = result[0].inbody;

  return (
    <div className={classes.main}>
      <h1>목표 체중 변경</h1>
      <div className={classes.body}>
        <div>
          <p className={classes.item}>
            현재 목표 체중 : {currentWeight ? currentWeight : "목표 설정 X"}kg
          </p>
          <p className={classes.item}>
            현재 목표 체지방 : {currentInbody ? currentInbody : "목표 설정 X"}%
          </p>
        </div>
        <SetupForm
          sessionEmail={session.user.email}
          currentWeight={currentWeight}
          currentInbody={currentInbody}
        />
      </div>
    </div>
  );
}
