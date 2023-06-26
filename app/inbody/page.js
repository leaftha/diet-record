import LineChart from "@/components/LineChart";

export default function InBody() {
  return (
    <div>
      <form method="POST" action="/api">
        <label>체중</label>
        <input name="name" type="number" />
        <label>체지방</label>
        <input name="email" type="number" />
        <label>근육량</label>
        <input name="password" type="number" />
        <label>체지방률</label>
        <input name="password" type="number" />
        <button type="submit">입력</button>
      </form>
      <div>
        <LineChart />
      </div>
    </div>
  );
}
