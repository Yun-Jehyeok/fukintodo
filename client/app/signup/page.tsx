"use client";

import { signupApi } from "@/apis/userApi";
import Breadcrumb from "@/components/BreadCrumb";
import { useInput } from "@/hooks/useInput";
import { userState } from "@/states/userStates";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useMutation } from "react-query";
import { useRecoilState } from "recoil";

export default function SignUp() {
  const router = useRouter();

  const [user, setUser] = useRecoilState(userState);

  const name = useInput("");
  const email = useInput("");
  const password = useInput("");
  const pwCheck = useInput("");

  const inputs = [
    {
      key: "name",
      value: name,
      type: "text",
      label: "Name",
      placeholder: "Enter your name",
      ico: "bg-name",
    },
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
    {
      key: "pwCheck",
      value: pwCheck,
      type: "password",
      label: "Password Check",
      placeholder: "Re-Enter your password",
      ico: "bg-pw",
    },
  ];

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
        router.push("/");
        // setUser(data.user);
      }
    },
    onSettled: () => {
      console.log("signupEnd");
    },
  });

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      let nameVal = name.v.value;
      let emailVal = email.v.value;
      let pwVal = password.v.value;
      let pcVal = pwCheck.v.value;

      if (nameVal === "") return;
      if (emailVal === "") return;
      if (pwVal === "") return;
      if (pcVal === "") return;
      if (pwVal.length < 8 || pwVal.length > 12) return;
      if (pwVal !== pcVal) return;

      let payload = {
        name: nameVal,
        email: emailVal,
        password: pwVal,
      };

      signupMutation.mutate(payload);
    },
    [name, email, password, pwCheck, signupMutation]
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
                        value={input.value.v.value}
                        onChange={input.value.v.onChange}
                      />
                      <div className={`w-[1.375rem] h-[1.375rem] bg-center bg-no-repeat bg-cover ${input.ico}`}></div>
                    </div>
                  </div>
                );
              })}

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
