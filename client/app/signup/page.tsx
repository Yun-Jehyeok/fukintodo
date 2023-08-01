"use client";

import { signupApi } from "@/apis/userApi";
import { useInput } from "@/hooks/useInput";
import { useMutation } from "react-query";

export default function SignUp() {
  const name = useInput("");
  const email = useInput("");
  const password = useInput("");

  const inputs = [
    { key: "name", value: name },
    { key: "email", value: email },
    { key: "password", value: password },
  ];

  const signupMutation = useMutation(signupApi, {
    onMutate: (variable) => {
      console.log("onMutate", variable);
    },
    onError: (error, variable, context) => {
      // error
    },
    onSuccess: (data, variables, context) => {
      console.log("success", data, variables, context);
    },
    onSettled: () => {
      console.log("end");
    },
  });

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    let payload = {
      name: name.v.value,
      email: email.v.value,
      password: password.v.value,
    };

    signupMutation.mutate(payload);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        {inputs.map((item) => {
          return (
            <input
              key={item.key}
              {...item.value.v}
              className="border border-black border-solid"
            />
          );
        })}
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </main>
  );
}
