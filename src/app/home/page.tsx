"use client";

import DonutChart from "@/components/charts/DonutChart";
import classNames from "classnames";
import dayjs from "dayjs";
import { AreaChart } from "lucide-react";

function page() {
  const sumData = [
    {
      date: "2026.04.01",
      budget: 123121, // 자산
      loan: 2312, // 대출
      revenue: 120, // 수익
    },
    {
      date: "2026.04.02",
      budget: 12312, // 자산
      loan: 231, // 대출
      revenue: 20, // 수익
    },
    {
      date: "2026.04.03",
      budget: 223121, // 자산
      loan: 23121, // 대출
      revenue: 220, // 수익
    },
    {
      date: "2026.04.08",
      budget: 223121, // 자산
      loan: 23121, // 대출
      revenue: 220, // 수익
    },
    {
      date: "2026.04.09",
      budget: 223121, // 자산
      loan: 23121, // 대출
      revenue: 220, // 수익
    },
  ];

  const compareSum =
    (sumData.find((data) => data.date === dayjs().format("YYYY.MM.DD"))
      ?.budget ?? 0) -
    (sumData.find(
      (data) => data.date === dayjs().subtract(1, "day").format("YYYY.MM.DD"),
    )?.budget ?? 0);

  const donutData = {
    labels: ["현금", "투자", "대출"],
    datasets: [
      {
        data: [45, 25, 20],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const areaData = {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월"],
    datasets: [
      {
        fill: true,
        label: "총자산 추이",
        data: [5000, 5200, 4800, 6100, 5900, 7200],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)", // Area 영역 투명도 조절
      },
    ],
  };

  return (
    <div className="w-full flex flex-col gap-y-5">
      <div>
        <div className="w-full flex px-1 justify-between items-baseline">
          <p className="font-bold">자산 요약</p>
          <p className="text-xs text-right mb-1 mr-1">
            {dayjs().format("YYYY.MM.DD HH:mm")} 기준
          </p>
        </div>
        <div className="border-1 rounded-sm p-6 grid grid-cols-3 gap-x-5">
          <div className="rounded-sm p-3 bg-gray-100 flex flex-col gap-y-5">
            <p className="text-xs">총자산</p>
            <p className="text-right text-xl font-bold">
              {sumData
                .find((data) => data.date === dayjs().format("YYYY.MM.DD"))
                ?.budget.toLocaleString()}
              <span
                className={classNames("text-xs font-normal text-blue-500", {
                  "text-red-500": compareSum > 0,
                })}
              >
                {" "}
                ({compareSum.toLocaleString()})
              </span>
            </p>
          </div>
          <div className="rounded-sm p-3 bg-gray-100 flex flex-col gap-y-5">
            <p className="text-xs">순자산(자산-대출)</p>
            <p className="text-right text-xl font-bold">
              {(
                sumData.find(
                  (data) => data.date === dayjs().format("YYYY.MM.DD"),
                )?.budget! -
                sumData.find(
                  (data) => data.date === dayjs().format("YYYY.MM.DD"),
                )?.loan!
              ).toLocaleString()}
            </p>
          </div>
          <div className="rounded-sm p-3 bg-gray-100 flex flex-col gap-y-5">
            <p className="text-xs">전일대비 수익률</p>
            <p className="text-right text-xl font-bold">
              {sumData
                .find((data) => data.date === dayjs().format("YYYY.MM.DD"))
                ?.budget.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full flex px-1 pb-1">
          <p className="font-bold">자산 구성 차트</p>
        </div>
        <div className="flex flex-col gap-y-5 border-1 rounded-sm p-6">
          <DonutChart data={donutData} />
          <AreaChart data={areaData} />
        </div>
      </div>
    </div>
  );
}

export default page;
