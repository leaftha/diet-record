import LineChart from ".";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";
export default async function InBody() {
  let session = await getServerSession(authOptions);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return (
    <div>
      <form method="POST" action="/api/post/inbody">
        <label>체중</label>
        <input name="weight" type="number" />
        <label>체지방</label>
        <input name="fat" type="number" />
        <label>근육량</label>
        <input name="mucle" type="number" />
        <label>체지방률</label>
        <input name="fatper" type="number" />
        <input
          style={{ display: "none" }}
          name="email"
          type="text"
          value={session.user.email}
        />
        <input
          style={{ display: "none" }}
          name="year"
          type="text"
          value={year}
        />
        <input
          style={{ display: "none" }}
          name="month"
          type="text"
          value={month}
        />
        <button type="submit">입력</button>
      </form>
      <div>
        <LineChart />
      </div>
    </div>
  );
}
