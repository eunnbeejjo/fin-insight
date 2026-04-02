"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [id, setId] = useState<string>();
  const [pw, setPw] = useState<string>();

  const handleClick = () => {
    console.log(id, pw);

    router.push("/home");
  };

  return (
    <div className="h-full flex-1 flex justify-center items-center">
      <div className="border-1 rounded-lg p-10 h-[300px] w-[340px] flex flex-col gap-y-8 justify-center items-center">
        <h1 className="text-lg font-bold">로그인</h1>

        <div className="flex flex-col gap-y-3 w-full">
          <Input
            name="id"
            placeholder="id"
            onChange={(e) => setId(e.target.value)}
          />
          <Input
            name="pw"
            placeholder="pw"
            type="password"
            onChange={(e) => setPw(e.target.value)}
          />
        </div>

        <Button
          onClick={handleClick}
          disabled={!id || !pw}
          className="w-full h-10"
        >
          로그인
        </Button>
      </div>
    </div>
  );
}
