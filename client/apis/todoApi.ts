import { todoIFC } from "@/interfaces/todoIFC";
import { Apis } from "@/utils/api";

export const createTodoApi = async (todo: todoIFC) => {
  try {
    const res = await Apis.post("/todo", todo);
    return res;
  } catch (err) {
    console.error(err, " : Create Todo Error !!!");
  }
};
