"use client";

import { createTodoApi } from "@/apis/todoApi";
import { useInput } from "@/hooks/useInput";
import { todosState } from "@/states/todoStates";
import { useCallback } from "react";
import { useMutation } from "react-query";
import { useRecoilState } from "recoil";

interface propsIFC {
  cancel: () => void;
}

export default function CreateSchedule({ cancel }: propsIFC) {
  const [todos, setTodos] = useRecoilState(todosState);

  const date = useInput("");
  const startTime = useInput("");
  const endTime = useInput("");
  const title = useInput("");
  const content = useInput("");

  const inputs = [
    {
      key: "date",
      value: date,
      type: "date",
      label: "날짜",
      placeholder: "Enter your date",
    },
    {
      key: "startTime",
      value: startTime,
      type: "text",
      label: "시작 시간",
      placeholder: "Enter your startTime",
    },
    {
      key: "endTime",
      value: endTime,
      type: "text",
      label: "종료 시간",
      placeholder: "Enter your endTime",
    },
    {
      key: "title",
      value: title,
      type: "text",
      label: "일정명",
      placeholder: "Enter your title",
    },
    {
      key: "content",
      value: content,
      type: "text",
      label: "내용",
      placeholder: "Enter your content",
    },
  ];

  const createMutation = useMutation(createTodoApi, {
    onMutate: (variable) => {
      console.log("onMutate", variable);
    },
    onError: (error, variable, context) => {
      console.error("Create Todo Error:::", error);
    },
    onSuccess: (data, variables, context) => {
      console.log("Create Todo Success", data, variables, context);
      let result = data.data.todos;

      console.log("result:::", result);

      cancel();
    },
    onSettled: () => {
      console.log("Create Todo End");
    },
  });

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      let dateVal = date.v.value;
      let startTimeVal = startTime.v.value;
      let endTimeVal = endTime.v.value;
      let titleVal = title.v.value;
      let contentVal = content.v.value;

      let payload = {
        date: dateVal,
        startTime: startTimeVal,
        endTime: endTimeVal,
        title: titleVal,
        content: contentVal,
        userId: "64d3100f8b0f3bf30ee8b782",
      };

      createMutation.mutate(payload);
    },
    [date, startTime, endTime, title, content, createMutation]
  );

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#181818] bg-opacity-50 flex justify-center items-center">
      <div className="w-[47.5rem] h-[83vh] bg-white py-[4vh] px-9 rounded-[2.25rem]">
        <div className="w-full items-center flex justify-between mb-8">
          <div className="text-2xl font-bold">일정 작성</div>
          <div className="w-6 h-6 bg-no-repeat bg-center cursor-pointer" onClick={cancel}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>

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
                </div>
              </div>
            );
          })}

          <button className="w-full h-14 bg-[#3056D3] text-white rounded-lg mt-[0.5625rem] text-base" onClick={handleSubmit}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
