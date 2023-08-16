"use client";

import { signinApi } from "@/apis/userApi";
import Breadcrumb from "@/components/BreadCrumb";
import { useInput } from "@/hooks/useInput";
import { userState } from "@/states/userStates";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useMutation } from "react-query";
import { useRecoilState } from "recoil";

export default function SignIn() {
  const router = useRouter();

  const [user, setUser] = useRecoilState(userState);

  const email = useInput("");
  const password = useInput("");

  const inputs = [
    {
      key: "email",
      value: email,
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      ico: "bg-email",
    },
    {
      key: "password",
      value: password,
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      ico: "bg-pw",
    },
  ];

  const signinMutation = useMutation(signinApi, {
    onMutate: (variable) => {
      console.log("onMutate", variable);
    },
    onError: (error, variable, context) => {
      console.error("signinErr:::", error);
    },
    onSuccess: (data, variables, context) => {
      console.log("signinSuccess", data, variables, context);

      if (data.success) {
        localStorage.setItem("token", data.token);
        setUser({ ...data.user, token: data.token });
        router.push("/");
      }
    },
    onSettled: () => {
      console.log("signinEnd");
    },
  });

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      let emailVal = email.value;
      let pwVal = password.value;

      if (emailVal === "") return;
      if (pwVal === "") return;

      let payload = {
        email: emailVal,
        password: pwVal,
      };

      signinMutation.mutate(payload);
    },
    [email, password, signinMutation]
  );

  return (
    <div className="w-full py-[0.625rem] pl-[4.3125rem] pr-24">
      <Breadcrumb pageName="Sign In" />

      <div className="w-full bg-white shadow-signup flex">
        <div className="w-1/2 flex justify-center items-center">Sign In Images</div>
        <div className="w-1/2 p-[4.375rem] border-l-2 border-[#E2E8F0] border-solid">
          <div className="w-full">
            <div className="text-base text-body mb-1.5">Start for free</div>
            <div className="text-[#212B36] text-[2.0625rem] font-bold mb-[2.1875rem]">Sign In to Logo</div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {inputs.map((input) => {
                return (
                  <div key={input.key}>
                    <div className="text-base text-[#1C2434] mb-2.5 font-medium">{input.label}</div>
                    <div className="w-full flex rounded-lg border border-solid border-[#E2E8F0] h-14 pl-[1.5625rem] pr-[0.875rem] items-center">
                      <input
                        className="flex-1 border-none outline-none focus:border-none focus:outline-none placeholder:text-base placeholder:font-normal"
                        name={input.key}
                        type={input.type}
                        placeholder={input.placeholder}
                        value={input.value.value}
                        onChange={input.value.onChange}
                      />
                      <div className={`w-[1.375rem] h-[1.375rem] bg-center bg-no-repeat bg-cover ${input.ico}`}></div>
                    </div>
                  </div>
                );
              })}

              <button className="w-full h-14 bg-[#3056D3] text-white rounded-lg mt-[0.5625rem] text-base" onClick={handleSubmit}>
                Sign In
              </button>
            </form>

            <button className="bg-[#E2E8F0] mt-5 w-full h-14 rounded-lg text-base">Sign in With Google</button>

            <div className="text-center w-full mt-[1.5625rem]">
              Don&apos;t have any account?{" "}
              <Link href="/signup" className="text-[#3056D3]">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
