// src/app/(main)/layout.tsx
import Sidebar from "@/components/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      {/* [고정 사이드바] - 모든 페이지(대시보드, 히스토리, 시뮬레이터)에 나타남 */}
      <Sidebar className="hidden md:flex w-64 shrink-0 bg-white border-r border-slate-200" />

      {/* [메인 콘텐츠 영역] */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* 상단 바: 페이지 제목이나 프로필 정보 */}
        <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-500">Service</span>
            <span className="text-sm text-slate-300">/</span>
            <span className="text-sm font-semibold text-slate-900 font-bold">
              Fin-Insight
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200" />
        </header>

        {/* 실제 각 페이지의 내용(children)이 들어가는 곳 */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
