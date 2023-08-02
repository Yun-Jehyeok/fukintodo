"use client";

import { userState } from "@/states/userStates";
import { useRecoilState } from "recoil";

export default function Home() {
  const [user, setUser] = useRecoilState(userState);

  console.log("user:::", user);
  return <main>test</main>;
}
