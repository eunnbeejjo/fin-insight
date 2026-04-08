import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler, // Area 차트를 위해 필수!
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
);

export default function AssetAreaChart({ data }: { data: any }) {
  const options = {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
    elements: {
      line: { tension: 0.4 }, // 부드러운 곡선 효과
    },
  };

  return <Line data={data} options={options} />;
}
