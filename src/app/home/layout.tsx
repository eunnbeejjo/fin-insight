import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-full">
      {/* 1. 화면 전체 너비를 사용하는 상단 헤더 */}
      <header className="flex h-16 w-full shrink-0 items-center justify-between border-b px-6 sticky top-0 bg-background z-50">
        <div className="flex items-center gap-4">
          <span className="text-lg font-bold tracking-tight">LOGO</span>
          {/* 필요 시 여기에 서비스 로고나 이름을 넣으세요 */}
        </div>

        <div className="flex items-center gap-4">
          {/* 알림, 사용자 프로필 등 우측 메뉴 자리 */}
          <div className="h-8 w-8 rounded-full bg-muted" />
        </div>
      </header>

      {/* 2. 헤더 아래의 사이드바 + 콘텐츠 영역 */}
      <div className="flex flex-1 overflow-hidden">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="flex flex-col overflow-y-auto">
            <main className="flex-1 p-6">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
}
