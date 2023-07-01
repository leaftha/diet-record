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

export default function LineChart({ label, weight, fat, muscle, fatper }) {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOption, setChartOption] = useState({});

  useEffect(() => {
    setChartData({
      labels: label,
      datasets: [
        {
          label: "몸무게",
          data: weight,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "체지방",
          data: fat,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
        {
          label: "근육량",
          data: muscle,
          borderColor: "rgb(255, 206, 86)",
          backgroundColor: "rgba(255, 206, 86, 0.5)",
        },
        {
          label: "체지방률",
          data: fatper,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.5)",
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
          text: "인바디 기록",
        },
      },
    });
  }, []);

  return (
    <div>
      <Line options={chartOption} data={chartData} />;
    </div>
  );
}
