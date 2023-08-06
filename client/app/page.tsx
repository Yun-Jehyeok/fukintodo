'use client'

import { userState } from "@/states/userStates";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    console.log("user:::::", user);
  }, [user])
  return <main>메인 페이지입니다</main>;
}
