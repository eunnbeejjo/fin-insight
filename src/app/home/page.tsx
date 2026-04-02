"use client";

import classNames from "classnames";
import dayjs from "dayjs";

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
  ];

  const compareSum =
    (sumData.find((data) => data.date === dayjs().format("YYYY.MM.DD"))
      ?.budget ?? 0) -
    (sumData.find(
      (data) => data.date === dayjs().subtract(1, "day").format("YYYY.MM.DD"),
    )?.budget ?? 0);

  return (
    <div className="w-full">
      <div className="w-full flex justify-between">
        <p>자산 요약</p>
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
              sumData.find((data) => data.date === dayjs().format("YYYY.MM.DD"))
                ?.budget! -
              sumData.find((data) => data.date === dayjs().format("YYYY.MM.DD"))
                ?.loan!
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
      <div>charts</div>
    </div>
  );
}

export default page;
