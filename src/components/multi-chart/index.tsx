import { useMemo } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

interface MultiChartProps {
  labels: Array<number | string>;
  values: Array<number>;
  xAxisTitle: string;
  yAxisTitle: string;
}

export function MultiChart({
  labels,
  values,
  xAxisTitle,
  yAxisTitle,
}: MultiChartProps) {

  const data = useMemo(() => ({
    labels,
    datasets: [
      {
        type: "line" as const,
        data: values,
        borderColor: "#FF52D9",
      },
      {
        type: "bar" as const,
        data: values,
        backgroundColor: "#7480FF",
      }
    ],
  }), [labels, values]);

  const options = useMemo(() => ({
    scales: {
      x: {
        title: {
          display: true,
          text: xAxisTitle,
        }
      },
      y: {
        title: {
          display: true,
          text: yAxisTitle,
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }), [xAxisTitle, yAxisTitle]);

  return <Chart type="bar" data={data} options={options} />;
}
