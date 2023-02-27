import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import React, { useRef, MouseEvent } from "react";
import { Chart, getElementAtEvent } from "react-chartjs-2";

import s from "./styles.module.scss";
import { config } from "../config/config";

ChartJS.register(CategoryScale, LinearScale, BarElement);
ChartJS.defaults.font = {
  family: "FC UI Display",
  size: 16,
};

const data = {
  labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  datasets: [
    {
      backgroundColor: "#EA8A79",
      data: [8.5, 6, 10, 9, 3, 7, 1],
    },
  ],
};

const mock = [
  {id: '1231fadf', stops: 3, focus: 40, pauseTime: 12, work: 87},
]

export const CustomChart = () => {
  const chartRef = useRef<any>(null);

  const handleClick = (e: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;

    const el = getElementAtEvent(chart, e);

    console.log(el);

    if (!chart) return;
  };

  return (
    <div className={s.chart}>
      <Chart
        type="bar"
        onClick={handleClick}
        ref={chartRef}
        options={config}
        data={data}
      />
    </div>
  );
};
