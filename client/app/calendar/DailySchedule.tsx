"use client";

import DailyScheduleItem from "./DailyScheduleItem";

interface todoIFC {
  id: string;
  date: string;
  title: string;
  startTime: string;
  endTime: string;
  content: string;
}
interface todosIFC {
  todos: todoIFC[];
}

export default function DailySchedule({ todos }: todosIFC) {
  return (
    <div className="w-full bg-white flex flex-col gap-4 p-6 h-[464px] overflow-y-auto relative">
      {todos.length > 0 ? (
        todos.map((item) => <DailyScheduleItem key={item.id} {...item} />)
      ) : (
        <div className="w-full h-full flex justify-center items-center text-sm font-semibold">일정이 없습니다.</div>
      )}
    </div>
  );
}
