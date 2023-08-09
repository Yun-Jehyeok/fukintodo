import { todosIFC } from "@/interfaces/todoIFC";
import { atom } from "recoil";

export const todosState = atom<todosIFC>({
  key: "todosState",
  default: {
    date: "",
    data: [],
  },
});
