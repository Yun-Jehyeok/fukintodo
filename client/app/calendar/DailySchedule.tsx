"use client";

import { useState } from "react";
import CreateSchedule from "./CreateSchedule";
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
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="w-full bg-white flex flex-col gap-4 p-6 h-[464px] overflow-y-auto relative">
      {todos.length > 0 ? (
        todos.map((item) => <DailyScheduleItem key={item.id} {...item} />)
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <div>
            <div className="text-sm font-semibold mb-2">일정이 없습니다</div>
            <div className="w-full flex justify-center">
              <button className="h-10 w-24 bg-primary rounded-md text-white" onClick={handleModal}>
                만들기
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal ? <CreateSchedule cancel={handleModal} /> : ""}
    </div>
  );
}
