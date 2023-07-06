import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import { connectDB } from "@/util/database";

import Imgform from "./imgform";
import NotAuth from "../notauth";
import Imgslide from "./imgslide";

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
  return (
    <div>
      {/* {result != null ? <div>이번달 입력완료</div> : <Imgform year={year} month={month} session={session} />} */}
      <Imgform year={year} month={month} session={session} />
      <Imgslide session={session} />
    </div>
  );
}
