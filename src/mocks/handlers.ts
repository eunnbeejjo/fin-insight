// src/mocks/handlers.ts
import { http, HttpResponse, delay } from "msw";

export const handlers = [
  // 내 자산 요약 정보 API 모킹
  http.get("/api/v1/assets/summary", async () => {
    // 실제 네트워크 지연 시뮬레이션 (시니어의 디테일)
    await delay(500);

    return HttpResponse.json({
      totalBalance: 150200300,
      monthlyChange: 5.4,
      categories: [
        { name: "현금", value: 45000000, color: "#3b82f6" },
        { name: "주식", value: 85200300, color: "#10b981" },
        { name: "부동산", value: 20000000, color: "#f59e0b" },
      ],
    });
  }),
];
