import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import { connectDB } from "@/util/database";
import LineChart from "./LineChart";
import NotAuth from "../notauth";

// db데이터 출력
// 그래프와 db연결
// 그래프 상반기 후반기 교체
// 정보값 입력시 같은 년도 달있으면 입력 X

export default async function InBody() {
  let session = await getServerSession(authOptions);
  if (session === null) {
    return NotAuth();
  }
  const client = await connectDB;
  const db = client.db("menber");
  // let result = await db
  //   .collection("inbody")
  //   .find({ email: session.user.email })
  //   .toArray();

  // result = result.map((a) => {
  //   a._id = a._id.toString();
  //   return a;
  // });

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
  return (
    <div>
      <form method="POST" action="/api/post/inbody">
        {result.length === 0 ? (
          <div>
            <label>체중</label>
            <input name="weight" type="number" step="0.01" />
            <label>체지방</label>
            <input name="fat" type="number" step="0.01" />
            <label>근육량</label>
            <input name="mucle" type="number" step="0.01" />
            <label>체지방률</label>
            <input name="fatper" type="number" step="0.01" />
            <input
              style={{ display: "none" }}
              name="email"
              type="text"
              defaultValue={session.user.email}
            />
            <input
              style={{ display: "none" }}
              name="year"
              type="text"
              defaultValue={year}
            />
            <input
              style={{ display: "none" }}
              name="month"
              type="text"
              defaultValue={month}
            />
            <button type="submit">입력</button>
          </div>
        ) : (
          month == result[0].month &&
          year == result[0].year && (
            <div>
              <h1>이번달 입력 완료</h1>
            </div>
          )
        )}
      </form>
      <div>
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
