"use client";

import { useState } from "react";
import DailyScheduleItem from "./DailyScheduleItem";

interface todoIFC {
  id: string;
  date: string;
  title: string;
  startTime: string;
  endTime: string;
  content: string;
}

export default function DailySchedule() {
  const [todos, setTodos] = useState<todoIFC[]>([
    {
      id: "1",
      date: "2023-08-06",
      startTime: "06:00",
      endTime: "08:00",
      title: "Calendar 개발",
      content: "상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용",
    },
    {
      id: "2",
      date: "2023-08-06",
      startTime: "08:00",
      endTime: "10:00",
      title: "팀장 면담",
      content: "상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용",
    },
    {
      id: "3",
      date: "2023-08-06",
      startTime: "12:00",
      endTime: "14:00",
      title: "퇴근하고싶다",
      content: "상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용",
    },
    {
      id: "4",
      date: "2023-08-06",
      startTime: "14:30",
      endTime: "18:00",
      title: "집에가고싶다",
      content: "상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용상세내용",
    },
  ]);

  return (
    <div className="w-full bg-white flex flex-col gap-4 p-6 max-h-[464px] overflow-y-auto relative">
      {todos.map((item) => (
        <DailyScheduleItem key={item.id} {...item} />
      ))}
    </div>
  );
}
