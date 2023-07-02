// 해당 월 달력 만들기
// 달력 날짜 클릭시 모딜 창으로 해당일 운동 기록입력
// ㄴ 해당 일자에만 가능하게
// 운동한 날 도장 찍어주기

import Calender from "./calender";
import { connectDB } from "@/util/database";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  format,
} from "date-fns";

export default async function Daily() {
  const currentMonth = new Date();

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);

  const year = currentMonth.getFullYear();
  const startMonth = format(startDate, "M");
  const endMonth = format(monthEnd, "M");

  console.log(startMonth, endMonth, year);

  let session = await getServerSession(authOptions);
  const client = await connectDB;
  const db = client.db("menber");
  let result = await db
    .collection("daliy")
    .find({
      email: session.user.email,
      year: `${year}`,
      month: { $gte: startMonth, $lte: endMonth },
    })
    .toArray();
  result = result.map((a) => {
    a._id = a._id.toString();
    return a;
  });

  return <div>{<Calender record={result} />}</div>;
}
