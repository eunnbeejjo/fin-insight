// src/mocks/browser.ts
import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// 핸들러들을 기반으로 서비스 워커 설정
export const worker = setupWorker(...handlers);

/**
 * [시니어 포인트: 초기화 로직 분리]
 * 단순히 worker를 내보내는 것에 그치지 않고,
 * 앱 실행 시점에 안전하게 start하기 위한 유틸리티 함수입니다.
 */
export const initMsw = async () => {
  // 개발 환경이 아니거나 서버 사이드일 경우 실행 방지
  if (process.env.NODE_ENV !== "development" || typeof window === "undefined") {
    return;
  }

  try {
    await worker.start({
      // 1. 서비스 워커 등록 파일 경로 (public/mockServiceWorker.js)
      serviceWorker: {
        url: "/mockServiceWorker.js",
      },
      // 2. 모킹되지 않은 요청(예: 구글 폰트, 정적 파일)은 경고 없이 통과
      onUnhandledRequest: "bypass",
    });
    console.log("✅ MSW Mocking Enabled");
  } catch (error) {
    console.error("❌ MSW Initialization Failed:", error);
  }
};
