import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="h-full flex-1 flex justify-center items-center">
      <div className="border-1 rounded-lg p-4">
        <div>로그인</div>
        <Input name="id" placeholder="id" />
        <Input name="pw" placeholder="pw" />

        <Button>로그인</Button>
      </div>
    </div>
  );
}
