import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Image from "next/image";
// import a from '../../assets'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-full">
      {/* 1. 화면 전체 너비를 사용하는 상단 헤더 */}
      <header className="flex h-16 w-full shrink-0 items-center justify-between border-b px-6 sticky top-0 bg-background z-50">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.png" // 새로운 로고 이미지 위치
            alt="AssetNAV Management Program Logo"
            width={48} // 더 작고 직관적으로
            height={48}
            className="aspect-square"
          />
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
