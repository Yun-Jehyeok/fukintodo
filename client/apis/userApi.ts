import { signupIFC } from "@/interfaces/userIFC";
import { Apis } from "@/utils/api";

export const signupApi = async (user: signupIFC) => {
  try {
    const res = await Apis.post("/user/register", user);
    return res;
  } catch (err) {
    console.error(err, " : Signup Error !!!");
  }
};
