"use client";

import { useState, ReactNode, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function Providers({ children }: { children: ReactNode }) {
  // 1. 시니어 포인트: QueryClient를 useState로 관리하여
  // 클라이언트 사이드에서 단 한 번만 생성되도록 보장 (Referential Identity)
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 핀테크 앱 특성상 데이터의 최신성이 중요하므로 적절한 staleTime 설정
            staleTime: 60 * 1000, // 1분
            retry: 1, // 실패 시 1회만 재시도
            refetchOnWindowFocus: false, // 윈도우 포커스 시 자동 리페치 방지 (필요 시 true)
          },
        },
      }),
  );

  // 2. MSW 초기화 로직 (개발 환경에서만 실행)
  const [isReady, setIsReady] = useState(
    process.env.NODE_ENV !== "development",
  );

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const initMsw = async () => {
        // 브라우저 환경에서만 동적으로 import
        const { worker } = await import("@/mocks/browser");
        await worker.start({
          onUnhandledRequest: "bypass", // 모킹되지 않은 요청은 그냥 통과
        });
        setIsReady(true);
      };
      initMsw();
    }
  }, []);

  // MSW가 준비되기 전에는 아무것도 렌더링하지 않거나 로딩 스피너를 보여줌
  // (API 호출 시 모킹 데이터가 매칭되지 않는 현상 방지)
  if (!isReady) return null;

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* 개발 단계에서 데이터 흐름 확인을 위한 Devtools (운영 모드에선 자동 제외됨) */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
