// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fin-Insight | 스마트한 자산 관리",
  description: "내 자산을 한눈에 분석하고 미래를 시뮬레이션하세요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={inter.className}>
        {/* 모든 페이지에서 공통으로 필요한 데이터 흐름만 주입 */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
