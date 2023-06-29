import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
import { connectDB } from "@/util/database";
import LineChart from "./LineChart";

// db데이터 출력
// 그래프와 db연결
// 그래프 상반기 후반기 교체
// 정보값 입력시 같은 년도 달있으면 입력 X

export default async function InBody() {
  let session = await getServerSession(authOptions);
  const client = await connectDB;
  const db = client.db("menber");
  const result = await db
    .collection("inbody")
    .find({ email: session.user.email })
    .toArray(function (err, result) {
      if (err) throw err;
      return result;
    });
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return (
    <div>
      <form method="POST" action="/api/post/inbody">
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
      </form>
      <div>
        <LineChart />
      </div>
    </div>
  );
}
