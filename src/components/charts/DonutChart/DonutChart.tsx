import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart({ data }: { data: any }) {
  const options = {
    cutout: "70%", // 도넛 두께 조절 (요즘 트렌드는 얇게!)
    plugins: {
      legend: { position: "bottom" as const },
    },
  };

  return <Doughnut data={data} options={options} />;
}
