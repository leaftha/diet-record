"use client";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ userinbody }) {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOption, setChartOption] = useState({});

  useEffect(() => {
    setChartData({
      labels: [1, 2, 3],
      datasets: [
        {
          label: "Dataset 1",
          data: [25, 23, 55],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });

    setChartOption({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Line Chart",
        },
      },
    });
  }, []);
  console.log(userinbody);
  return (
    <div>
      <Line options={chartOption} data={chartData} />;
    </div>
  );
}
