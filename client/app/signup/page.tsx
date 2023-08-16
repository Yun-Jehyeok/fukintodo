"use client";

import { signupApi } from "@/apis/userApi";
import Breadcrumb from "@/components/BreadCrumb";
import { useInput } from "@/hooks/useInput";
import { userState } from "@/states/userStates";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useMutation } from "react-query";
import { useRecoilState } from "recoil";

interface errIFC {
  name: boolean;
  email: boolean;
  password: boolean;
  pwCheck: boolean;
}
interface errMsgIFC {
  name: string;
  email: string;
  password: string;
  pwCheck: string;
}

export default function SignUp() {
  const router = useRouter();

  const [user, setUser] = useRecoilState(userState);

  const name = useInput("");
  const email = useInput("");
  const password = useInput("");
  const pwCheck = useInput("");

  const [errors, setErrors] = useState<errIFC>({
    name: false,
    email: false,
    password: false,
    pwCheck: false,
  });
  const [errMsg, setErrMsg] = useState<errMsgIFC>({
    name: "",
    email: "",
    password: "",
    pwCheck: "",
  });

  const signupMutation = useMutation(signupApi, {
    onMutate: (variable) => {
      console.log("onMutate", variable);
    },
    onError: (error, variable, context) => {
      console.error("signupErr:::", error);
    },
    onSuccess: (data, variables, context) => {
      console.log("signupSuccess", data, variables, context);

      if (data.success) {
        localStorage.setItem("token", data.token);
        setUser({ ...data.user, token: data.token });
        router.push("/");
      }
    },
    onSettled: () => {
      console.log("signupEnd");
    },
  });

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      let name_v = name.value;
      let email_v = email.value;
      let pw_v = password.value;
      let pc_v = pwCheck.value;

      if (name_v === "") {
        console.log("here", { ...errors, name: true });
        setErrors({ ...errors, name: true });
        console.log("errors:::", errors);
        setErrMsg({ ...errMsg, name: "이름을 입력해주세요" });
        console.log("errMsg:::", errMsg);
      }

      if (email_v === "") {
        setErrors({ ...errors, email: true });
        setErrMsg({ ...errMsg, email: "이메일을 입력해주세요" });
      }

      if (pw_v === "") {
        setErrors({ ...errors, password: true });
        setErrMsg({ ...errMsg, password: "비밀번호를 입력해주세요" });
      } else if (pw_v.length < 8 || pw_v.length > 12) {
        setErrors({ ...errors, password: true });
        setErrMsg({ ...errMsg, password: "비밀번호는 8~12자 입니다." });
      }

      if (pc_v === "") {
        setErrors({ ...errors, pwCheck: true });
        setErrMsg({ ...errMsg, pwCheck: "비밀번호 확인을 입력해주세요" });
      } else if (pw_v !== pc_v) {
        setErrors({ ...errors, pwCheck: true });
        setErrMsg({ ...errMsg, pwCheck: "비밀번호와 비밀번호 확인은 동일해야 합니다." });
      }

      console.log("errors:::", errors);
      if (errors.name || errors.email || errors.pwCheck || errors.password) {
        return;
      } else {
        let payload = {
          name: name_v,
          email: email_v,
          password: pw_v,
        };

        signupMutation.mutate(payload);
      }
    },
    [errors, errMsg, name, email, password, pwCheck, setErrors, setErrMsg, signupMutation]
  );

  return (
    <div className="w-full py-[0.625rem] pl-[4.3125rem] pr-24">
      <Breadcrumb pageName="Sign Up" />

      <div className="w-full bg-white shadow-signup flex">
        <div className="w-1/2 flex justify-center items-center">Sign Up Images</div>
        <div className="w-1/2 p-[4.375rem] border-l-2 border-[#E2E8F0] border-solid">
          <div className="w-full">
            <div className="text-base text-body mb-1.5">Start for free</div>
            <div className="text-[#212B36] text-[2.0625rem] font-bold mb-[2.1875rem]">Sign Up to Logo</div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <div className="text-base text-[#1C2434] mb-2.5 font-medium">Name</div>
                <div className={`w-full flex rounded-lg border border-solid ${errors.name ? "border-[#ea002c]" : "border-[#E2E8F0]"} h-14 pl-[1.5625rem] pr-[0.875rem] items-center`}>
                  <input
                    className="flex-1 border-none outline-none focus:border-none focus:outline-none placeholder:text-base placeholder:font-normal"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name.value}
                    onChange={name.onChange}
                  />
                  <div className={`w-[1.375rem] h-[1.375rem] bg-center bg-no-repeat bg-cover bg-name`}></div>
                </div>
                {errors.name ? <div className="pl-[1.5625rem] text-xs mt-1 text-[#ea002c]">{errMsg.name}</div> : ""}
              </div>

              <div>
                <div className="text-base text-[#1C2434] mb-2.5 font-medium">Email</div>
                <div className={`w-full flex rounded-lg border border-solid ${errors.email ? "border-[#ea002c]" : "border-[#E2E8F0]"} h-14 pl-[1.5625rem] pr-[0.875rem] items-center`}>
                  <input
                    className="flex-1 border-none outline-none focus:border-none focus:outline-none placeholder:text-base placeholder:font-normal"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email.value}
                    onChange={email.onChange}
                  />
                  <div className={`w-[1.375rem] h-[1.375rem] bg-center bg-no-repeat bg-cover bg-email`}></div>
                </div>
                {errors.email ? <div className="pl-[1.5625rem] text-xs mt-1 text-[#ea002c]">{errMsg.email}</div> : ""}
              </div>

              <div>
                <div className="text-base text-[#1C2434] mb-2.5 font-medium">Password</div>
                <div className={`w-full flex rounded-lg border border-solid ${errors.password ? "border-[#ea002c]" : "border-[#E2E8F0]"} h-14 pl-[1.5625rem] pr-[0.875rem] items-center`}>
                  <input
                    className="flex-1 border-none outline-none focus:border-none focus:outline-none placeholder:text-base placeholder:font-normal"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password.value}
                    onChange={password.onChange}
                  />
                  <div className={`w-[1.375rem] h-[1.375rem] bg-center bg-no-repeat bg-cover bg-pw`}></div>
                </div>
                {errors.password ? <div className="pl-[1.5625rem] text-xs mt-1 text-[#ea002c]">{errMsg.password}</div> : ""}
              </div>

              <div>
                <div className="text-base text-[#1C2434] mb-2.5 font-medium">Password Check</div>
                <div className={`w-full flex rounded-lg border border-solid ${errors.pwCheck ? "border-[#ea002c]" : "border-[#E2E8F0]"} h-14 pl-[1.5625rem] pr-[0.875rem] items-center`}>
                  <input
                    className="flex-1 border-none outline-none focus:border-none focus:outline-none placeholder:text-base placeholder:font-normal"
                    name="pwCheck"
                    type="pwCheck"
                    placeholder="Re-Enter your password"
                    value={pwCheck.value}
                    onChange={pwCheck.onChange}
                  />
                  <div className={`w-[1.375rem] h-[1.375rem] bg-center bg-no-repeat bg-cover bg-pw`}></div>
                </div>
                {errors.pwCheck ? <div className="pl-[1.5625rem] text-xs mt-1 text-[#ea002c]">{errMsg.pwCheck}</div> : ""}
              </div>

              <button className="w-full h-14 bg-[#3056D3] text-white rounded-lg mt-[0.5625rem] text-base" onClick={handleSubmit}>
                Create Account
              </button>
            </form>

            <button className="bg-[#E2E8F0] mt-5 w-full h-14 rounded-lg text-base">Sign up With Google</button>

            <div className="text-center w-full mt-[1.5625rem]">
              Already has an Account?
              <Link href="/signin" className="text-[#3056D3]">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
